from django.db import models

from templatetags.wiki import wikify


class Page(models.Model):
    name = models.CharField(max_length=255, unique=True)
    content = models.TextField()
    rendered = models.TextField()
    order = models.IntegerField()
    visible_in_nav = models.BooleanField(default=True)

    class Meta:
        ordering = ('order',)

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.rendered = wikify(self.content)
        super(Page, self).save(*args, **kwargs)
