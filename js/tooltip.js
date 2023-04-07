document.addEventListener('DOMContentLoaded', function() {
  tippy('#tooltipFirst', {
    content: "Пример современных тенденций - современная методология разработки",
    arrow: false,
    animation: 'shift-toward',
    interactive: true,
    trigger: 'click',
  });

  tippy('#tooltipSecond', {
    content: "В стремлении повысить качество",
    arrow: false,
    animation: 'shift-toward',
    interactive: true,
    trigger: 'click',
  });
  tippy('#tooltipThird', {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ",
    arrow: false,
    animation: 'shift-toward',
    interactive: true,
    trigger: 'click',
  });

})
