import React from 'react';
import './calculate.css';

class Calculate extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items:{
          "Sem 1":[["Applied Chemistry–1","Applied Chemistry Laboratory -I","Applied Physics-I","Applied Physic Laboratory -I","Applied Mathematics-I","Engineering Mechanics","Engineering Mechanics-Laboratory ","Engineering Graphics","Engineering Graphics laboratory ","Business English"],[2,1,3,1,4,3,1,2,1,2],10],
          "Sem 2":[["Applied Chemistry-II", "Applied Chemistry Laboratory -II", "Applied Physics-II", "Applied Physic Laboratory -II", "Applied Mathematics-II", "Basic of Electrical Engineering", "Elements of Mechanical Engineering", "Computer Programming", "Computer Programming Laboratory", "Workshop (Mechanical)"],[2,1,3,1,4,2,2,2,2,1],10],
          "Sem 3":[["Linear Algebra","Discrete Mathematics","Fundamentals of Data Structures","Data Structures Lab","Digital Systems and Logic Design","Computer Organizations and Architectures","Program Development Lab"],[4,4,3,1.5,3,3,2.5],7],
          "Sem 4":[["Data Interpretation and Analysis","Design and Analysis of Algorithms","Theory of Computations","Operating Systems","Operating Systems Lab","Database Management Systems","Database Management Systems Lab","Introduction to Geospatial"],[4,3,3,3,3,1,3,1,3],8],
          "Sem 5":[["Statistics and Optimization", "Intelligent System","Computer Networks","Computer Networks Lab","Software Analysis and Design","Software Analysis and Design Lab","Graphics & Processing","Operating System","Operating System Lab"],[4,4,3,1,3,1,4,3,1],9],
          "Sem 6":[["Software Architecture & Design Patterns","Machine Learning","Advance Architecture","Advance Architecture Lab","Wireless network","Wireless network Lab","Elective-I","Information Security","Information Security Lab"],[4,4,3,1,3,1,4,3,1],9],
          "Sem 7":[["Information Storage and Management","Data Mining Techniques ","Data Mining Techniques Laboratory ","Service Oriented Architecture ","Service Oriented Architecture Laboratory ","Elective-2","Elective-2 Laboratory ","Open Elective ","Project Stage I"],[4,3,1,3,1,4,1,4,2],9],
          "Sem 8":[["Human Computer Interaction ","Cloud Computing"," Cloud Computing Lab ","Big Data Analytics"," Big Data Analytics Lab","Elective-3","Elective-3 Lab ","Elective-4"," Project-IIub1"],[4,3,1,3,1,3,1,4,4],9]
        },
        mark:[],
        rows:[],
        credit:0,
      pointer:0
    }
    this.getPointer=this.getPointer.bind(this);
    this.handleInput=this.handleInput.bind(this);
    // console.log("Hey para " + this.state.items[this.props.match.params.id][0][0]);
    var list=this.state.items[this.props.match.params.id];
    for(var i=0;i<list[2];i++){
      this.state.rows.push(<div>
         <p class='sub_name'>{list[0][i]}</p>
          <input type="number" name={i} placeholder="Enter Grade" onChange={this.handleInput}></input>
        </div>);
      this.state.rows.push();
      this.state.credit +=  parseFloat(list[1][i]);
      this.state.mark.push(0);
    }

  }

handleInput(event){
  var list=this.state.items[this.props.match.params.id];
  let index = event.target.name;
  let type = event.target.type;
  let val = type === "number" ? parseFloat(event.target.value) : event.target.value;

  console.log("Pointer " + this.state.pointer +" credit "+ this.state.credit);
  this.state.mark[index]= val*parseFloat(list[1][index]);
  // var point = this.state.pointer + val*parseFloat(name);
  // this.setState({
  //     pointer:point
  // });
  // alert("value of "+[name] +" is "+val);
}

getPointer(event){
  event.preventDefault();
  var list=this.state.items[this.props.match.params.id];
  var newPointer = 0 ;
  for(var i=0;i<list[2];i++){
    newPointer+=this.state.mark[i];
  }
  newPointer = newPointer / this.state.credit ;
  console.log("Pointer " + this.state.pointer +" credit "+ this.state.credit);
  this.setState({
    pointer : newPointer
  });
}

  render(){
    return (
      <div className="cal">
        <header>
          <p id="heading">VJTI Pointer Finder</p>
          <form id="grade_form" onSubmit = {this.getPointer}>
            <tbody>
              {this.state.rows}
            </tbody>

            <button type="submit">Calculate</button>


          </form>
          <p id="result_tab">Your Pointer is : {this.state.pointer}</p>
        </header>
      </div>
    );
  }
}

export default Calculate;
