// Grammar data for Russian Pronouns and Nouns Practice App

const pronounData = {
  personal: [
    {
      pronoun: "я",
      type: "personal",
      cases: {
        nominative: { russian: "я", english: "I (nom.)" },
        accusative: { russian: "меня", english: "me (acc.)" },
        genitive: { russian: "меня", english: "me (gen.)" },
        dative: { russian: "мне", english: "me (dat.)" },
        instrumental: { russian: "мной", english: "me (inst.)" },
        prepositional: { russian: "мне", english: "me (prep.)" }
      }
    },
    {
      pronoun: "ты",
      type: "personal",
      cases: {
        nominative: { russian: "ты", english: "you informal (nom.)" },
        accusative: { russian: "тебя", english: "you informal (acc.)" },
        genitive: { russian: "тебя", english: "you informal (gen.)" },
        dative: { russian: "тебе", english: "you informal (dat.)" },
        instrumental: { russian: "тобой", english: "you informal (inst.)" },
        prepositional: { russian: "тебе", english: "you informal (prep.)" }
      }
    },
    {
      pronoun: "он",
      type: "personal",
      cases: {
        nominative: { russian: "он", english: "he (nom.)" },
        accusative: { russian: "его", english: "him (acc.)" },
        genitive: { russian: "его", english: "him (gen.)" },
        dative: { russian: "ему", english: "him (dat.)" },
        instrumental: { russian: "им", english: "him (inst.)" },
        prepositional: { russian: "нём", english: "him (prep.)" }
      }
    },
    {
      pronoun: "она",
      type: "personal",
      cases: {
        nominative: { russian: "она", english: "she (nom.)" },
        accusative: { russian: "её", english: "her (acc.)" },
        genitive: { russian: "её", english: "her (gen.)" },
        dative: { russian: "ей", english: "her (dat.)" },
        instrumental: { russian: "ей", english: "her (inst.)" },
        prepositional: { russian: "ней", english: "her (prep.)" }
      }
    },
    {
      pronoun: "оно",
      type: "personal",
      cases: {
        nominative: { russian: "оно", english: "it (nom.)" },
        accusative: { russian: "его", english: "it (acc.)" },
        genitive: { russian: "его", english: "it (gen.)" },
        dative: { russian: "ему", english: "it (dat.)" },
        instrumental: { russian: "им", english: "it (inst.)" },
        prepositional: { russian: "нём", english: "it (prep.)" }
      }
    },
    {
      pronoun: "мы",
      type: "personal",
      cases: {
        nominative: { russian: "мы", english: "we (nom.)" },
        accusative: { russian: "нас", english: "us (acc.)" },
        genitive: { russian: "нас", english: "us (gen.)" },
        dative: { russian: "нам", english: "us (dat.)" },
        instrumental: { russian: "нами", english: "us (inst.)" },
        prepositional: { russian: "нас", english: "us (prep.)" }
      }
    },
    {
      pronoun: "вы",
      type: "personal",
      cases: {
        nominative: { russian: "вы", english: "you formal/plural (nom.)" },
        accusative: { russian: "вас", english: "you formal/plural (acc.)" },
        genitive: { russian: "вас", english: "you formal/plural (gen.)" },
        dative: { russian: "вам", english: "you formal/plural (dat.)" },
        instrumental: { russian: "вами", english: "you formal/plural (inst.)" },
        prepositional: { russian: "вас", english: "you formal/plural (prep.)" }
      }
    },
    {
      pronoun: "они",
      type: "personal",
      cases: {
        nominative: { russian: "они", english: "they (nom.)" },
        accusative: { russian: "их", english: "them (acc.)" },
        genitive: { russian: "их", english: "them (gen.)" },
        dative: { russian: "им", english: "them (dat.)" },
        instrumental: { russian: "ими", english: "them (inst.)" },
        prepositional: { russian: "них", english: "them (prep.)" }
      }
    }
  ],
  possessive: [
    {
      pronoun: "мой",
      type: "possessive",
      gender: "masculine",
      cases: {
        nominative: { russian: "мой", english: "my masc. (nom.)" },
        accusative: { russian: "мой/моего", english: "my masc. (acc.)" },
        genitive: { russian: "моего", english: "my masc. (gen.)" },
        dative: { russian: "моему", english: "my masc. (dat.)" },
        instrumental: { russian: "моим", english: "my masc. (inst.)" },
        prepositional: { russian: "моём", english: "my masc. (prep.)" }
      }
    },
    {
      pronoun: "моя",
      type: "possessive",
      gender: "feminine",
      cases: {
        nominative: { russian: "моя", english: "my fem. (nom.)" },
        accusative: { russian: "мою", english: "my fem. (acc.)" },
        genitive: { russian: "моей", english: "my fem. (gen.)" },
        dative: { russian: "моей", english: "my fem. (dat.)" },
        instrumental: { russian: "моей", english: "my fem. (inst.)" },
        prepositional: { russian: "моей", english: "my fem. (prep.)" }
      }
    },
    {
      pronoun: "моё",
      type: "possessive",
      gender: "neuter",
      cases: {
        nominative: { russian: "моё", english: "my neut. (nom.)" },
        accusative: { russian: "моё", english: "my neut. (acc.)" },
        genitive: { russian: "моего", english: "my neut. (gen.)" },
        dative: { russian: "моему", english: "my neut. (dat.)" },
        instrumental: { russian: "моим", english: "my neut. (inst.)" },
        prepositional: { russian: "моём", english: "my neut. (prep.)" }
      }
    },
    {
      pronoun: "твой",
      type: "possessive",
      gender: "masculine",
      cases: {
        nominative: { russian: "твой", english: "your informal masc. (nom.)" },
        accusative: { russian: "твой/твоего", english: "your informal masc. (acc.)" },
        genitive: { russian: "твоего", english: "your informal masc. (gen.)" },
        dative: { russian: "твоему", english: "your informal masc. (dat.)" },
        instrumental: { russian: "твоим", english: "your informal masc. (inst.)" },
        prepositional: { russian: "твоём", english: "your informal masc. (prep.)" }
      }
    },
    {
      pronoun: "наш",
      type: "possessive",
      gender: "masculine",
      cases: {
        nominative: { russian: "наш", english: "our masc. (nom.)" },
        accusative: { russian: "наш/нашего", english: "our masc. (acc.)" },
        genitive: { russian: "нашего", english: "our masc. (gen.)" },
        dative: { russian: "нашему", english: "our masc. (dat.)" },
        instrumental: { russian: "нашим", english: "our masc. (inst.)" },
        prepositional: { russian: "нашем", english: "our masc. (prep.)" }
      }
    },
    {
      pronoun: "ваш",
      type: "possessive",
      gender: "masculine",
      cases: {
        nominative: { russian: "ваш", english: "your formal masc. (nom.)" },
        accusative: { russian: "ваш/вашего", english: "your formal masc. (acc.)" },
        genitive: { russian: "вашего", english: "your formal masc. (gen.)" },
        dative: { russian: "вашему", english: "your formal masc. (dat.)" },
        instrumental: { russian: "вашим", english: "your formal masc. (inst.)" },
        prepositional: { russian: "вашем", english: "your formal masc. (prep.)" }
      }
    }
  ],
  demonstrative: [
    {
      pronoun: "этот",
      type: "demonstrative",
      gender: "masculine",
      cases: {
        nominative: { russian: "этот", english: "this masc. (nom.)" },
        accusative: { russian: "этот/этого", english: "this masc. (acc.)" },
        genitive: { russian: "этого", english: "this masc. (gen.)" },
        dative: { russian: "этому", english: "this masc. (dat.)" },
        instrumental: { russian: "этим", english: "this masc. (inst.)" },
        prepositional: { russian: "этом", english: "this masc. (prep.)" }
      }
    },
    {
      pronoun: "эта",
      type: "demonstrative",
      gender: "feminine",
      cases: {
        nominative: { russian: "эта", english: "this fem. (nom.)" },
        accusative: { russian: "эту", english: "this fem. (acc.)" },
        genitive: { russian: "этой", english: "this fem. (gen.)" },
        dative: { russian: "этой", english: "this fem. (dat.)" },
        instrumental: { russian: "этой", english: "this fem. (inst.)" },
        prepositional: { russian: "этой", english: "this fem. (prep.)" }
      }
    },
    {
      pronoun: "это",
      type: "demonstrative",
      gender: "neuter",
      cases: {
        nominative: { russian: "это", english: "this neut. (nom.)" },
        accusative: { russian: "это", english: "this neut. (acc.)" },
        genitive: { russian: "этого", english: "this neut. (gen.)" },
        dative: { russian: "этому", english: "this neut. (dat.)" },
        instrumental: { russian: "этим", english: "this neut. (inst.)" },
        prepositional: { russian: "этом", english: "this neut. (prep.)" }
      }
    },
    {
      pronoun: "эти",
      type: "demonstrative",
      gender: "plural",
      cases: {
        nominative: { russian: "эти", english: "these (nom.)" },
        accusative: { russian: "эти/этих", english: "these (acc.)" },
        genitive: { russian: "этих", english: "these (gen.)" },
        dative: { russian: "этим", english: "these (dat.)" },
        instrumental: { russian: "этими", english: "these (inst.)" },
        prepositional: { russian: "этих", english: "these (prep.)" }
      }
    },
    {
      pronoun: "тот",
      type: "demonstrative",
      gender: "masculine",
      cases: {
        nominative: { russian: "тот", english: "that masc. (nom.)" },
        accusative: { russian: "тот/того", english: "that masc. (acc.)" },
        genitive: { russian: "того", english: "that masc. (gen.)" },
        dative: { russian: "тому", english: "that masc. (dat.)" },
        instrumental: { russian: "тем", english: "that masc. (inst.)" },
        prepositional: { russian: "том", english: "that masc. (prep.)" }
      }
    },
    {
      pronoun: "та",
      type: "demonstrative",
      gender: "feminine",
      cases: {
        nominative: { russian: "та", english: "that fem. (nom.)" },
        accusative: { russian: "ту", english: "that fem. (acc.)" },
        genitive: { russian: "той", english: "that fem. (gen.)" },
        dative: { russian: "той", english: "that fem. (dat.)" },
        instrumental: { russian: "той", english: "that fem. (inst.)" },
        prepositional: { russian: "той", english: "that fem. (prep.)" }
      }
    },
    {
      pronoun: "то",
      type: "demonstrative",
      gender: "neuter",
      cases: {
        nominative: { russian: "то", english: "that neut. (nom.)" },
        accusative: { russian: "то", english: "that neut. (acc.)" },
        genitive: { russian: "того", english: "that neut. (gen.)" },
        dative: { russian: "тому", english: "that neut. (dat.)" },
        instrumental: { russian: "тем", english: "that neut. (inst.)" },
        prepositional: { russian: "том", english: "that neut. (prep.)" }
      }
    },
    {
      pronoun: "те",
      type: "demonstrative",
      gender: "plural",
      cases: {
        nominative: { russian: "те", english: "those (nom.)" },
        accusative: { russian: "те/тех", english: "those (acc.)" },
        genitive: { russian: "тех", english: "those (gen.)" },
        dative: { russian: "тем", english: "those (dat.)" },
        instrumental: { russian: "теми", english: "those (inst.)" },
        prepositional: { russian: "тех", english: "those (prep.)" }
      }
    }
  ],
  interrogative: [
    {
      pronoun: "кто",
      type: "interrogative",
      cases: {
        nominative: { russian: "кто", english: "who" },
        accusative: { russian: "кого", english: "whom" },
        genitive: { russian: "кого", english: "whose/of whom" },
        dative: { russian: "кому", english: "to whom" },
        instrumental: { russian: "кем", english: "by whom" },
        prepositional: { russian: "ком", english: "about whom" }
      }
    },
    {
      pronoun: "что",
      type: "interrogative",
      cases: {
        nominative: { russian: "что", english: "what" },
        accusative: { russian: "что", english: "what (acc.)" },
        genitive: { russian: "чего", english: "of what" },
        dative: { russian: "чему", english: "to what" },
        instrumental: { russian: "чем", english: "with what" },
        prepositional: { russian: "чём", english: "about what" }
      }
    }
  ]
};

const nounData = {
  masculine: [
    {
      noun: "стол",
      type: "masculine",
      english: "table",
      cases: {
        nominative: { russian: "стол", english: "table" },
        accusative: { russian: "стол", english: "table (acc.)" },
        genitive: { russian: "стола", english: "of the table" },
        dative: { russian: "столу", english: "to the table" },
        instrumental: { russian: "столом", english: "with the table" },
        prepositional: { russian: "столе", english: "about the table" }
      }
    },
    {
      noun: "учитель",
      type: "masculine",
      english: "teacher",
      cases: {
        nominative: { russian: "учитель", english: "teacher" },
        accusative: { russian: "учителя", english: "teacher (acc.)" },
        genitive: { russian: "учителя", english: "of the teacher" },
        dative: { russian: "учителю", english: "to the teacher" },
        instrumental: { russian: "учителем", english: "with the teacher" },
        prepositional: { russian: "учителе", english: "about the teacher" }
      }
    },
    {
      noun: "музей",
      type: "masculine",
      english: "museum",
      cases: {
        nominative: { russian: "музей", english: "museum" },
        accusative: { russian: "музей", english: "museum (acc.)" },
        genitive: { russian: "музея", english: "of the museum" },
        dative: { russian: "музею", english: "to the museum" },
        instrumental: { russian: "музеем", english: "with the museum" },
        prepositional: { russian: "музее", english: "about the museum" }
      }
    },
    {
      noun: "дом",
      type: "masculine",
      english: "house",
      cases: {
        nominative: { russian: "дом", english: "house" },
        accusative: { russian: "дом", english: "house (acc.)" },
        genitive: { russian: "дома", english: "of the house" },
        dative: { russian: "дому", english: "to the house" },
        instrumental: { russian: "домом", english: "with the house" },
        prepositional: { russian: "доме", english: "about the house" }
      }
    },
    {
      noun: "автобус",
      type: "masculine",
      english: "bus",
      cases: {
        nominative: { russian: "автобус", english: "bus" },
        accusative: { russian: "автобус", english: "bus (acc.)" },
        genitive: { russian: "автобуса", english: "of the bus" },
        dative: { russian: "автобусу", english: "to the bus" },
        instrumental: { russian: "автобусом", english: "with the bus" },
        prepositional: { russian: "автобусе", english: "about the bus" }
      }
    }
  ],
  feminine: [
    {
      noun: "мама",
      type: "feminine",
      english: "mom",
      cases: {
        nominative: { russian: "мама", english: "mom" },
        accusative: { russian: "маму", english: "mom (acc.)" },
        genitive: { russian: "мамы", english: "of mom" },
        dative: { russian: "маме", english: "to mom" },
        instrumental: { russian: "мамой", english: "with mom" },
        prepositional: { russian: "маме", english: "about mom" }
      }
    },
    {
      noun: "девочка",
      type: "feminine",
      english: "girl",
      cases: {
        nominative: { russian: "девочка", english: "girl" },
        accusative: { russian: "девочку", english: "girl (acc.)" },
        genitive: { russian: "девочки", english: "of the girl" },
        dative: { russian: "девочке", english: "to the girl" },
        instrumental: { russian: "девочкой", english: "with the girl" },
        prepositional: { russian: "девочке", english: "about the girl" }
      }
    },
    {
      noun: "школа",
      type: "feminine",
      english: "school",
      cases: {
        nominative: { russian: "школа", english: "school" },
        accusative: { russian: "школу", english: "school (acc.)" },
        genitive: { russian: "школы", english: "of the school" },
        dative: { russian: "школе", english: "to the school" },
        instrumental: { russian: "школой", english: "with the school" },
        prepositional: { russian: "школе", english: "about the school" }
      }
    },
    {
      noun: "книга",
      type: "feminine",
      english: "book",
      cases: {
        nominative: { russian: "книга", english: "book" },
        accusative: { russian: "книгу", english: "book (acc.)" },
        genitive: { russian: "книги", english: "of the book" },
        dative: { russian: "книге", english: "to the book" },
        instrumental: { russian: "книгой", english: "with the book" },
        prepositional: { russian: "книге", english: "about the book" }
      }
    },
    {
      noun: "собака",
      type: "feminine",
      english: "dog",
      cases: {
        nominative: { russian: "собака", english: "dog" },
        accusative: { russian: "собаку", english: "dog (acc.)" },
        genitive: { russian: "собаки", english: "of the dog" },
        dative: { russian: "собаке", english: "to the dog" },
        instrumental: { russian: "собакой", english: "with the dog" },
        prepositional: { russian: "собаке", english: "about the dog" }
      }
    }
  ],
  neuter: [
    {
      noun: "окно",
      type: "neuter",
      english: "window",
      cases: {
        nominative: { russian: "окно", english: "window" },
        accusative: { russian: "окно", english: "window (acc.)" },
        genitive: { russian: "окна", english: "of the window" },
        dative: { russian: "окну", english: "to the window" },
        instrumental: { russian: "окном", english: "with the window" },
        prepositional: { russian: "окне", english: "about the window" }
      }
    },
    {
      noun: "море",
      type: "neuter",
      english: "sea",
      cases: {
        nominative: { russian: "море", english: "sea" },
        accusative: { russian: "море", english: "sea (acc.)" },
        genitive: { russian: "моря", english: "of the sea" },
        dative: { russian: "морю", english: "to the sea" },
        instrumental: { russian: "морем", english: "with the sea" },
        prepositional: { russian: "море", english: "about the sea" }
      }
    },
    {
      noun: "дерево",
      type: "neuter",
      english: "tree",
      cases: {
        nominative: { russian: "дерево", english: "tree" },
        accusative: { russian: "дерево", english: "tree (acc.)" },
        genitive: { russian: "дерева", english: "of the tree" },
        dative: { russian: "дереву", english: "to the tree" },
        instrumental: { russian: "деревом", english: "with the tree" },
        prepositional: { russian: "дереве", english: "about the tree" }
      }
    },
    {
      noun: "здание",
      type: "neuter",
      english: "building",
      cases: {
        nominative: { russian: "здание", english: "building" },
        accusative: { russian: "здание", english: "building (acc.)" },
        genitive: { russian: "здания", english: "of the building" },
        dative: { russian: "зданию", english: "to the building" },
        instrumental: { russian: "зданием", english: "with the building" },
        prepositional: { russian: "здании", english: "about the building" }
      }
    }
  ],
  plural: [
    {
      noun: "столы",
      type: "plural",
      english: "tables",
      cases: {
        nominative: { russian: "столы", english: "tables" },
        accusative: { russian: "столы", english: "tables (acc.)" },
        genitive: { russian: "столов", english: "of the tables" },
        dative: { russian: "столам", english: "to the tables" },
        instrumental: { russian: "столами", english: "with the tables" },
        prepositional: { russian: "столах", english: "about the tables" }
      }
    },
    {
      noun: "девочки",
      type: "plural",
      english: "girls",
      cases: {
        nominative: { russian: "девочки", english: "girls" },
        accusative: { russian: "девочек", english: "girls (acc.)" },
        genitive: { russian: "девочек", english: "of the girls" },
        dative: { russian: "девочкам", english: "to the girls" },
        instrumental: { russian: "девочками", english: "with the girls" },
        prepositional: { russian: "девочках", english: "about the girls" }
      }
    },
    {
      noun: "окна",
      type: "plural",
      english: "windows",
      cases: {
        nominative: { russian: "окна", english: "windows" },
        accusative: { russian: "окна", english: "windows (acc.)" },
        genitive: { russian: "окон", english: "of the windows" },
        dative: { russian: "окнам", english: "to the windows" },
        instrumental: { russian: "окнами", english: "with the windows" },
        prepositional: { russian: "окнах", english: "about the windows" }
      }
    },
    {
      noun: "книги",
      type: "plural",
      english: "books",
      cases: {
        nominative: { russian: "книги", english: "books" },
        accusative: { russian: "книги", english: "books (acc.)" },
        genitive: { russian: "книг", english: "of the books" },
        dative: { russian: "книгам", english: "to the books" },
        instrumental: { russian: "книгами", english: "with the books" },
        prepositional: { russian: "книгах", english: "about the books" }
      }
    }
  ]
};