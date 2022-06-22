class Storage {
  static savedData = {
    someday: [],
    today: [],
    tomorrow: [],
    custom: []
  }

  static saveToDoCard = (forWhen, text, dueDate) => {
    const knownTimes = ['someday', 'today', 'tomorrow', 'custom'];

    if (!knownTimes.includes(forWhen.toLowerCase())) {
      console.alert('forWhen fornecido não é valido.');
      return;
    }

    this.savedData[forWhen].push(
      dueDate ? { text, dueDate } : { text }
    );
  }
}

export default Storage;