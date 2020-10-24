import logo from './logo.svg';
import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root : {
    width:'100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080 
  }
})
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
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
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
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
