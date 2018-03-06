'use strict';

export class Helper {
  constructor(props) {
  
    this.state = {};
  }


  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }


  formattedTimestamp(date) {
    var options = {  
      weekday: "long", year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit"  
    };
    return date.toLocaleTimeString('en-us', options);
  }


  scrollContainer(eleId) {
    if (typeof document !== "undefined") {
      const element = document.getElementById(eleId);
      if (element != null)
        element.scrollTop = element.scrollHeight;
    } else {
      console.log('Document does not exist');
    }
  }

}