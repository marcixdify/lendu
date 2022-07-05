from importlib.metadata import files
from rest_framework import serializers

from lendu.models import  NoticeLike, Notice
#from lendu.models import Todo

# class NoticeSerializer(serializers.ModelSerializer):
#     NoticeOwner = serializers.PrimaryKeyRelatedField(read_only=True)
#     NoticeImg = serializers.ImageField(required=False)
#     total_number_of_likes = serializers.SerializerMethodField()
#     class Meta:
#         model=Notices
#         fields = '__all__'


#     def get_total_number_of_likes(self, obj):
#         return obj.get_total_number_of_likes()
    
# # class TodoSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Todo
# #         fields = '__all__'


# class NoticeLikeSerializer(serializers.ModelSerializer):
#     user = serializers.PrimaryKeyRelatedField(read_only=True)

#     class Meta:
#         model = NoticeLike
#         fields = ('id', 'user', 'notice')







class  NoticeSerializer(serializers.ModelSerializer):
    NoticeOwner = serializers.PrimaryKeyRelatedField(read_only=True)
    NoticeImg = serializers.ImageField(required=False)
    username = serializers.SerializerMethodField()
    total_number_of_likes = serializers.SerializerMethodField()



    class Meta:
        model = Notice
        fields = ('id', 'NoticeOwner', 'NoticeTitle', 'NoticeCategory', 'NoticeImg', 'NoticeDescription', 'NoticeCredit', 'username','total_number_of_likes', 'NoticeDateAdd', 'NoticeDateUpdate', 'identifier')

    identifier = serializers.IntegerField(source='NoticeOwner.identifier', read_only=True)

    def get_username(self, obj):
        return obj.NoticeOwner.testuser.username

    def get_category_name(self, obj):
        return obj.category.name

    def get_total_number_of_likes(self, obj):
        return obj.get_total_number_of_likes()

    # def get_identifier(self, obj):
    #     return obj.NoticeOwner.testuser.username



    def update(self, instance, validated_data):
        if 'category' in validated_data:
            nested_serializer = self.fields['category']
            nested_instance = instance.category
            nested_data = validated_data.pop('category')

            nested_serializer.update(nested_instance, nested_data)

        return super(NoticeSerializer, self).update(instance, validated_data)


class NoticeLikeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = NoticeLike
        fields = ('id', 'user', 'recipe')