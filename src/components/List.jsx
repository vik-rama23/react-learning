var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./LIstItem.jsx');

var ingredients = [{"id":1,"text":"ham1"}, {"id":2,"text":"ham2"},{"id":3,"text":"ham"}];

var List = createReactClass({
    render:function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text}/>
        });
        return(<ul>{listItems}</ul>);
    }
})


module.exports = List;