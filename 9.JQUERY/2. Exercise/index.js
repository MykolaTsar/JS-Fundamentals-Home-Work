// На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank"
$("a[href^='https://']").attr('target', '_blank');