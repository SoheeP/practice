import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps){
      return false
    }
    return true;
  }
  render(){
    let list = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length){
      //react가 내부에서 필요해서 요청하는 key값
      list.push(
      <li key={data[i].id}>
        <a href={"/content/"+data[i].id} data-id={data[i].id} onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>{data[i].title}</a>
      </li>
    );
      i ++;
    }
    return(
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}

export default TOC;