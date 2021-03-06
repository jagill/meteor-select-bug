if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to optionTest.";
  };

  Template.syntaxModeOptions.helpers( {
    syntaxModes: function() {
      return [
        {name:'a', caption:'A'}, 
        {name:'b', caption:'B'}, 
        {name:'c', caption:'C'}, 
        {name:'d', caption:'D'}
      ];
    },

    selected: function() {
      if (this.name == Session.get('syntax')) {
        return "selected";
      } else {
        return "";
      }
    }
  });
}

