import React, { Component } from 'react';

import ToDoItem from './to-do-item'

export default class ToDoList extends Component{
    render() {
        const item = this.props.db.map(db => {
            if(this.props.priority !== "")
                if(this.props.priority === db.pr) return <ToDoItem key = {db.id} prItem = {db}/>
                else return null
            else return <ToDoItem key = {db.id} prItem = {db}/>
        }
        ) 
        return(
            <div className="services">
                {item}
            </div> 
        );
    }
}