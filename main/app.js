function removeOrderItem(orderInfo, position){
    var contor = 0;
 if(!Array.isArray(orderInfo.items))throw Error('Items should be an array');
        for(var i=0;i<orderInfo.items.length;i++)
        if(Object.getOwnPropertyNames(orderInfo.items[i]).toString().startsWith('price') && Object.getOwnPropertyNames(orderInfo.items[i]).toString().endsWith('quantity'))
            contor++; else throw Error('Malformed item');
        if(position>contor)throw Error('Invalid position');

        orderInfo.items.splice(position,1);

        orderInfo.total=0;
        for(var i=0;i<orderInfo.items.length;i++)
        orderInfo.total=orderInfo.total+(orderInfo.items[i].price*orderInfo.items[i].quantity);

        return orderInfo;
    
}

const app = {
    removeOrderItem
};

module.exports = app;
