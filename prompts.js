module.exports=[
  {
      name:'application',
      type:'list',
      message:'请选择你要生成的项目类型',
      choices:[
          {name:'pc',value:'pc'},
          {name:'mobile',value:'mobile'}
      ],
      defalut:'mobile-web'
  },
  {
    name: "vuex",
    type: "confirm",
    message: `是否使用vuex`
  }
]