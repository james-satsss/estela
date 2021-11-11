from rest_framework import serializers

from core.models import Project, Spider
from core.registry import get_registry_token


class ProjectSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ("pid", "name", "token", "container_image")

    def get_token(self, project):
        return get_registry_token()


class SetRelatedSpidersProjectSerializer(serializers.ModelSerializer):
    spiders_names = serializers.ListField(child=serializers.CharField(max_length=1000))

    class Meta:
        model = Project
        fields = (
            "pid",
            "spiders_names",
        )

    def save(self, *args, **kwargs):
        validated_data = {**self.validated_data, **kwargs}
        spiders_names = validated_data["spiders_names"]
        project = self.context["project"]
        project.spiders.filter(name__in=spiders_names, deleted=True).update(
            deleted=False
        )
        project.spiders.exclude(name__in=spiders_names).update(deleted=True)
        new_spiders = [
            Spider(name=spider_name, project=project)
            for spider_name in spiders_names
            if not project.spiders.filter(name=spider_name).exists()
        ]
        Spider.objects.bulk_create(new_spiders)
        return project