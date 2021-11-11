from core.kubernetes import (
    get_api_instance,
    create_job,
    delete_job,
    read_job,
    read_job_status,
)
from tests.base import BaseTestCase, TEST_DOCKER_IMAGE, TEST_SPIDER


class TestKubernetes(BaseTestCase):
    job_api_instance = get_api_instance()

    def test_kubernetes_api(self):
        items = self.job_api_instance.list_job_for_all_namespaces().items
        self.assertEqual(type(items), list)
        items = self.job_api_instance.list_namespaced_job("default").items
        self.assertEqual(type(items), list)

    def test_create_job(self):
        response = create_job(
            "test1",
            "1.1.1",
            TEST_SPIDER,
            {},
            {},
            TEST_DOCKER_IMAGE,
            api_instance=self.job_api_instance,
        )
        delete_job("test1", api_instance=self.job_api_instance)
        self.assertEqual(response._metadata.name, "test1")

    def test_read_job(self):
        create_job(
            "test2",
            "1.1.1",
            TEST_SPIDER,
            {},
            {},
            TEST_DOCKER_IMAGE,
            api_instance=self.job_api_instance,
        )
        response = read_job("test2", api_instance=self.job_api_instance)
        delete_job("test2", api_instance=self.job_api_instance)
        self.assertEqual(response._metadata.name, "test2")

    def test_delete_job(self):
        create_job(
            "test3",
            "1.1.1",
            TEST_SPIDER,
            {},
            {},
            TEST_DOCKER_IMAGE,
            api_instance=self.job_api_instance,
        )
        response = delete_job("test3", api_instance=self.job_api_instance)
        self.assertIsNone(response.message)

    def test_read_status_job(self):
        create_job(
            "test4",
            "1.1.1",
            TEST_SPIDER,
            {},
            {},
            TEST_DOCKER_IMAGE,
            api_instance=self.job_api_instance,
        )
        response = read_job_status("test4", api_instance=self.job_api_instance)
        self.assertIsNotNone(response)
        delete_job("test4", api_instance=self.job_api_instance)