const BudgetPlan = [{
    key: 1,
    title: 'Банкет',
    sum: 44800,
    children: [{
      key: 110,
      title: 'Аренда беседки',
      sum: 6000,
    }, {
      key: 12,
      title: 'Шашлык',
      sum: 12000,
    }, {
      key: 13,
      title: 'Спиртное',
      sum: 22000,
      children: [{
        key: 131,
        title: 'Пиво',
        sum: 3600,
      },{
        key: 132,
        title: 'Вино',
        sum: 4200,
      },{
        key: 133,
        title: 'Виски',
        sum: 5600,
      }],
  }, {
    key: 2,
    title: 'Соки, кола, минералка',
    sum: 2800,
  }, {
    key: 3,
    title: 'Холодные закуски',
    sum: 2800,
  }, {
    key: 4,
    title: 'Овощи',
    sum: 2800,
  }, {
    key: 5,
    title: 'Нарезка',
    sum: 2800,
  }]}, 
  
  {
    key: 6, 
    title: 'Трансфер и размещение', 
    sum: 15000, 
    children: [
      {
        key: 61,
        title: 'Аренда автобуса',
        sum: 6000,
      },
      {
        key: 62,
        title: 'Аренда базы отдыха',
        sum: 7800
      }
    ]
  }, {
    key: 7,
    title: 'Спортинвентарь',
    sum:3200
  }, {
    key: 8,
    title: 'Ведущий',
    sum:3200
  }
  , {
    key: 9,
    title: 'Диджей',
    sum:3200
  }
  , {
    key: 10,
    title: 'Фотограф',
    sum:3200
  }
  , {
    key: 11,
    title: 'Футболки',
    sum:3200
  }
  ];

  export default BudgetPlan;