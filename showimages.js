$("img[data-src]").each(function () {
    $(this).data('src', $(this).data('src').replace("http://", "https://"));
});

$('[data-action="expand"]').each(function () {
    content = $(this).closest('.post').find('.content').first();
    if (content.find('img').first().length && content.find('img').first().attr('src') === '') {
        content.find('img').first().attr('src', content.find('img').first().data('src'));
    } else if (content.find('.video-container').first().length) {
        if ($.trim(content.find('.video-container').first().html()) === '') {
            content.find('.video-container').first().append('<iframe src="' + content.find('.video-container').first().data('src') + '" frameborder="0" allowfullscreen></iframe>');
        } else {
            content.find('iframe').remove();
        }
    }
    content.find('img').first().removeAttr('data-src');
    content.find('img').first().removeData('src');
    content.show();
});