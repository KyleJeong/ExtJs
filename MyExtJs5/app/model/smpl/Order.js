/**
 * Created by Administrator on 2016-07-11.
 */
Ext.define('ext5.model.smpl.Order',{
   extend:'Ext.data.Model',
    fields:[
        'customerName',
        'orderDate',
        'orderDesc',
        {
            name:'orderCnt',
            type:'int'
        },
        {
            name:'orderAmount',
            type:'float'
        },
        {
            name:'accrueAmount',
            type:'float'
        },
        {
            name:'isMember',
            type:'boolean'
        },
        'orderDetail',
        'estimate',
        'areaNm',
        'id',
        'name',
        'lastName'

    ],
    proxy:{
        type:'ajax',
        url:'/resources/data/Order.json',
        reader:{
            type:'json',
            rootProperty:'entitys'
        }
    },
    validators:[
        {
            type:'inclusion',
            field:'isMember',
            list:[true, false]
        }
    ]
});