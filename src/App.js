import React, { Component } from 'react';
import "./App.sass";
import {HashRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/SideBar/SideBar';
import { Context } from './components/Context/Context';
import axios from 'axios';
import Layout from './components/Layout/Layout';

import CHF from "./image/CHF.png";
import CNY from "./image/CNY.png";
import EUR from "./image/EUR.png";
import GBP from "./image/GBP.png";
import JPY from "./image/JPY.png";
import RUB from "./image/RUB.png";
import USD from "./image/USD.png";
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      error: '',
      //formControls
      formControls: {
        email: {
          errorMessage: "Введите коректный email",
          name: "Email",
          type: "email",
          valid: true,
          value: '', 
          val: ''
        },
        password: {
          errorMessage: "Введите коректный пароль",
          name: "Password",
          type: "password",
          valid: true,
          value: '',
          val: ''
        }
      },
      valid: '',
      errorModal: false,
      //
      baseCyrrency: "USD",
      currency: {
        USD:{name: 'Доллар США', flag: USD, course: ''},
        RUB:{name: 'Российский Рубль', flag: RUB, course: ''},
        JPY:{name: 'Японская Йена', flag: JPY, course: ''},
        GBP:{name: 'Фунт Стерлингов', flag: GBP, course: ''},
        EUR:{name: 'Евро', flag: EUR, course: ''},
        CNY:{name: 'Китайский Юань', flag: CNY, course: ''},
        CHF:{name: 'Швецарский Франк', flag: CHF, course: ''}
        },
      date: "2021-05-10",
      //calc
      selectOne: 'USD',
      selectTwo: 'RUB',
      inputValue: 100,
      result: null,
      //

      //sample
      sample: {
        base: "USD", baseTwo: "RUB", date: '2011-11-11', course: ''
      },
      sampleList: '',
      //

      //Modal
      modal: true
      //
    }
  }
 
  loginHeandler = async(e) => {
    e.preventDefault();

    const userData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
      AIzaSyAZn3BPC2Hrb2RGY40wVCqWkQ_8cmRpKN0`, userData) 
      console.log(response);
      let formControls = {...this.state.formControls};
      formControls.email.val = "";
      formControls.password.val = "";
      if (response.data.idToken) {
        this.setState({
          auth: true,
          modal: true,
          formControls
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  registerHeandler = async(e) => {
    e.preventDefault();

    const userData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
      AIzaSyAZn3BPC2Hrb2RGY40wVCqWkQ_8cmRpKN0`, userData) 
      let formControls = {...this.state.formControls};
      formControls.email.val = "";
      formControls.password.val = "";
      if (response.data.idToken) {
        this.setState({
          auth: true,
          modal: true,
          formControls
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  //Modal
  formValidation = (e) => {
    //создаем регулярное выражение
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // создаем переменные в которые положим value из инпутов форм
    let emailValue = '',
        passwordValue = '',
        formControls = {...this.state.formControls};
    // Задаем switch для проверки
    switch (true) {
      //Если тип инпута равен email то:
      case (e.target.type === "email"):
        //заключаем в переменную value
        emailValue = e.target.value;
        formControls.email.val = e.target.value
        this.setState({formControls})
        //если emailValue соответствует регулярному выражению
        if (regexEmail.test(emailValue)) {
          formControls.email.valid = true;
          formControls.email.value = emailValue;
          //задаем значение в state
          this.setState({ formControls: {...formControls} });  
        } else {
          formControls.email.value = '';
          formControls.email.valid = false;
          this.setState({ formControls: {...formControls}}); 
        };
        break;
      //все идентично выше показанному
      case (e.target.type === "password"):
        passwordValue = e.target.value;
        formControls.password.val = e.target.value
        this.setState({formControls})
        if (passwordValue.length > 3) {
          formControls.password.valid = true;
          formControls.password.value = passwordValue;
          this.setState({ formControls: {...formControls} });  
        } else {
          formControls.password.value = '';
          formControls.password.valid = false;
          this.setState({ formControls: {...formControls}}); 
        };
        break;
    }
  }

  //
  
  //Sample
  getSampleBaseTwo = (e) => {
    const baseTwo = e.target.value
    this.setState({
      sample: {...this.state.sample, baseTwo}
    })
  }
  getSampleBase = (e) => {
    const base = e.target.value
    this.setState({
      sample: {...this.state.sample, base}
    })
  }
  getSampleDate = (e) => {
    const date = e.target.value
    this.setState({
      sample: {...this.state.sample, date}
    })
  }

  //Sample

  deleteItem = async(item) => {
    let sampleList = {...this.state.sampleList};
    delete sampleList[item];
    this.setState({sampleList});

    await axios.delete(`https://course-b2a3e-default-rtdb.firebaseio.com/sample/${item}.json`)
  }

  getDataSample = async() => {
    await axios(`https://api.ratesapi.io/api/${this.state.sample.date}?base=${this.state.sample.base}&symbols=${this.state.sample.baseTwo}`)
      .then(response => 
        {
          const data = response.data.rates,
                course = data[Object.keys(data)].toFixed(2);
          this.setState({ 
            sample: {...this.state.sample, course}
          });
        })
    await axios.post(`https://course-b2a3e-default-rtdb.firebaseio.com/sample.json`, this.state.sample)
        .then(response => {return ('')})
    await axios(`https://course-b2a3e-default-rtdb.firebaseio.com/sample.json`)
        .then(response => {
          const data = response.data;
          this.setState({ 
            sampleList: {...data} 
          });
        })
  }

  getSample = () => {
    axios(`https://course-b2a3e-default-rtdb.firebaseio.com/sample.json`)
        .then(response => {
          const data = response.data;
          this.setState({ 
            sampleList: {...data} 
          });
        })
  }

  //Calc

  currencyMap = () => {
    return (
        Object.keys(this.state.currency).map((item, index) => {
            return (
                <option key={index }value={item}>{item}</option>
        )})
        
    )
  }

  calcSelectOne = (e) => {
    const selectOne = e.target.value;
    this.setState({
      selectOne,
      result: null
    });
  }

  calcSelectTwo = (e) => {
    const selectTwo = e.target.value;
    this.setState({
      selectTwo,
      result: null
    });
  }

  inputValue = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue,
      result: null
    });
  }

  getCalc = () => {
    axios(`https://api.ratesapi.io/api/latest?base=${this.state.selectOne}&symbols=${this.state.selectTwo}`)
      .then(response => {
        console.log(response);
        const result = this.state.inputValue * response.data.rates[this.state.selectTwo].toFixed(2);
        this.setState({
          result
        })
      })
  }

  
  //Component Home
  //Изменение базовой валюты
  baseCyrrencyHandler = (e) => {
    const baseCyrrency = e.target.value;
    this.setState({
      baseCyrrency
    });
    this.getCourse(baseCyrrency);
  } 

  //Получение валюты 
  getCourse = async(a) => {
    const api = await fetch(`https://api.ratesapi.io/api/latest?base=${a}`);
    const date = await api.json();
    //Заключаем ключи объекта currency в key
    const key = Object.keys(this.state.currency);
    //Кладем в переменную currency весь this.state.currency
    let currency = {...this.state.currency};
    for (let i = 0; i < key.length; i++) {
      //С помощью цикла в значение курса каждого объекта записываем значения нужных нам курсов
      currency[key[i]].course = date.rates[key[i]].toFixed(2);

    }
    this.setState({
      currency,
      date: date.date,
      baseCyrrency: date.base,
      sample: {...this.state.sample, date: date.date}
    });
  }

  // Modal
  modalShow = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.getCourse("USD");
    this.getSample();
  }

  render() {
    return ( 
      <HashRouter>
            {/* <Navigation modalShow={this.modalShow}/> */}
                <Context.Provider value={{
                  state: this.state,
                  baseCyrrencyHandler: this.baseCyrrencyHandler,
                  selectOne: this.calcSelectOne,
                  selectTwo: this.calcSelectTwo,
                  inputValue: this.inputValue,
                  getCalc: this.getCalc,
                  currencyMap: this.currencyMap,
                  getSampleBase: this.getSampleBase,
                  getSampleBaseTwo: this.getSampleBaseTwo,
                  getSampleDate: this.getSampleDate,
                  getDataSample: this.getDataSample,
                  deleteItem: this.deleteItem, 
                  modalShow: this.modalShow,
                  formValidation: this.formValidation,
                  registerHeandler: this.registerHeandler,
                  loginHeandler: this.loginHeandler
                }}> 
                  <Layout/>
                  <Modal modal={this.state.modal} hide={this.modalShow}/>
                </Context.Provider>
      </HashRouter>
     );
  }
}
 
export default App;
