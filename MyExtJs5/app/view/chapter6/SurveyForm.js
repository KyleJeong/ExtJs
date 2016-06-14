/**
 * Created by Administrator on 2016-06-14.
 */
Ext.define('ext5.view.chapter6.SurveyForm',{
   extend:'Ext.form.FieldSet',
    xtype:'chapter6-surveyform',
    requires:[
        'ext5.view.chapter6.SurveyRadio'
    ],
    title:'Survey',
    layout:'anchor',
    defaults:{
        anchor:'100%'
    },
    initComponent:function(){
        Ext.apply(this,{
           items:[
               {
                   xtype:'container',
                   layout:'hbox',
                   defaults:{
                       flex:1
                   },
                   items:[
                       {
                           xtype:'chapter6-surveyradio',
                           label:'gender',
                           code:'gender'
                       },
                       {
                           xtype:'chapter6-surveyradio',
                           label:'age',
                           code:'age'
                       },
                       {
                           xtype:'chapter6-surveyradio',
                           label:'career',
                           code:'career'
                       },
                       {
                           xtype:'chapter6-surveyradio',
                           label:'job',
                           code:'job'
                       },
                       {
                           xtype:'chapter6-surveyradio',
                           label:'jobtype',
                           code:'jobtype'
                       }
                   ]
               }

           ]
        });
        this.callParent();
    }
});