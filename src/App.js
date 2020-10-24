import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
import { Component } from 'react';

const customers = [{
  'id':1
  ,'image': 'http://placeimg.com/64/64/3'
  ,'name' : '홍길동'
  ,'gender' : 'male'
  ,'birthday' : '909090'
  ,'job' : 'programmer'
},{
  'id':2
  ,'image': 'http://placeimg.com/64/64/1'
  ,'name' : '하하하'
  ,'gender' : 'male'
  ,'birthday' : '234090'
  ,'job' : 'programmer'
},{
  'id':3
  ,'image': 'http://placeimg.com/64/64/2'
  ,'name' : '냠냠'
  ,'gender' : 'female'
  ,'birthday' : '1230'
  ,'job' : 'programmer'
}]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                gender={c.gender}
                birthday={c.birthday}
                job={c.job}
              />
            );
          })
      }
      </div>
    );
  }
}

export default App;
