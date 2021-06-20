class Worker {

  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  register(){
      return `${this.name} ${this.surname} adlı çalışanın sigorta kaydını başlatalım.`;
  }

}

class Task extends Worker {

  constructor(name, surname, age, task){
      super(name, surname);
      this.age = age;
      this.task = task;
  }

  defineTask(){
      return `${this.name} ${this.surname} ${this.age} yaşındadır. Yaşı görev için uygundur ve bugün ${this.task} görevi ile yaka kartı hazırlayalım.`;
  }

}

let newWorker = new Task("Abc", "XYZ", "19", "Mühendis");
console.log(newWorker.register());
// Abc XYZ adlı çalışanın sigorta kaydını başlatalım.

console.log(newWorker.defineTask());
/* Abc XYZ 19 yaşındadır. Yaşı görev için uygundur ve bugün Mühendis görevi ile yaka kartı hazırlayalım. */
