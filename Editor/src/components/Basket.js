import React from 'react'

export default function () {
    console.log(JSON.parse(localStorage.getItem('basket'))[0].img)
    // var pathImg = JSON.parse(localStorage.getItem('basket'))[0].img
    var items = JSON.parse(localStorage.getItem('basket'))

    var sum = 0;
    items.forEach(function(item, i, arr) {
        var cost = item['cost']
        // console.log(cost)
        var costStr = cost.replace(' р.', '')
        // console.log(costStr)
        var itemCost = parseInt(costStr)
        console.log(itemCost)
        sum = sum + itemCost
        console.log(sum)
    });
    // var newStr = string.replace('Whats on your mind?', '');
  return (
    <div className="basket">
        <div className="basket__body">
            {items.map((item) => 
            <div className="basket__item">
                <div className="item__img">
                    <img src={item.img} alt="" />
                </div>
                <div className="rightCol">
                    <div className="item__name">{item.name}</div>
                    <div className="item__cost">{item.cost}</div>
                    <div className="delete">Удалить</div>
                </div>
            </div>
            )}
            
            
        </div>
        <div className="amount">
            <div className="amount__title">Сумма заказа:</div>
            <div className="amount__count">{sum} р.</div>
        </div>
    </div>
  )
}
