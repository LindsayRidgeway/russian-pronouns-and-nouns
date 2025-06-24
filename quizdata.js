<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Russian Pronouns and Nouns Practice App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: #f5f5f5;
    }
    #main-container {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    #left-panel {
      flex: 3;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    #right-panel {
      flex: 1;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .button-group {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .mode-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
    }
    .mode-button:hover {
      background-color: #45a049;
    }
    .quiz-section {
      margin-top: 20px;
    }
    .radio-option {
      margin: 6px 0;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    .radio-option:hover {
      background-color: #f0f0f0;
    }
    .filter-section {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 2px solid #e0e0e0;
    }
    .filter-option {
      margin: 6px 0;
    }
    .reveal-section {
      margin: 15px 0;
    }
    .reveal-section button {
      background-color: #2196F3;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    .reveal-section button:hover {
      background-color: #1976D2;
    }
    .repeat-section {
      margin: 10px 0;
    }
    .repeat-section button {
      background-color: #FF9800;
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
    }
    .repeat-section button:hover {
      background-color: #F57C00;
    }
    .submit-button {
      background-color: #9C27B0;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 15px;
      transition: background-color 0.3s;
    }
    .submit-button:hover {
      background-color: #7B1FA2;
    }
    .hidden {
      display: none;
    }
    #challenge {
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0;
      padding: 15px;
      background-color: #f8f9fa;
      border-left: 4px solid #4CAF50;
      border-radius: 4px;
    }
    #result {
      margin: 15px 0;
      padding: 10px;
      border-radius: 4px;
      font-weight: bold;
    }
    .result-correct {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    .result-incorrect {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
    #score {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin: 10px 0;
    }
    .filter-section h3 {
      color: #333;
      margin-bottom: 15px;
      font-size: 16px;
    }
    .tab-buttons {
      display: flex;
      margin-bottom: 20px;
      border-bottom: 2px solid #e0e0e0;
    }
    .tab-button {
      background: none;
      border: none;
      padding: 12px 20px;
      cursor: pointer;
      font-size: 14px;
      border-bottom: 3px solid transparent;
      transition: all 0.3s;
    }
    .tab-button.active {
      border-bottom-color: #4CAF50;
      color: #4CAF50;
      font-weight: bold;
    }
    .tab-button:hover {
      background-color: #f5f5f5;
    }
    .tab-content {
      display: none;
    }
    .tab-content.active {
      display: block;
    }
    footer {
      margin-top: 40px;
      font-size: 0.9em;
      font-style: italic;
      text-align: center;
      color: #666;
    }
  </style>
</head>
<body>
  <h1>Russian Pronouns and Nouns Practice App</h1>

  <div id="main-container">
    <div id="left-panel">
      <div class="button-group">
        <button class="mode-button" id="btn1">English → Russian</button>
        <button class="mode-button" id="btn2">Russian → English</button>
        <button class="mode-button" id="btn3">🔊 Spoken English</button>
        <button class="mode-button" id="btn4">🔊 Spoken Russian</button>
      </div>

      <div class="quiz-section">
        <div id="challenge">Select a quiz mode and filters to begin</div>
        
        <div id="repeat-section" class="repeat-section hidden">
          <button id="repeat-btn">🔊 Repeat</button>
        </div>

        <div id="reveal-section" class="reveal-section hidden">
          <button id="reveal-btn">Reveal Choices</button>
        </div>

        <div id="choices-container" class="hidden">
          <div id="choices"></div>
          <div class="quiz-section">
            <button class="submit-button" id="submit-btn">Submit Answer</button>
          </div>
        </div>

        <div id="result"></div>
        <div id="score"></div>
      </div>
    </div>

    <div id="right-panel">
      <div class="tab-buttons">
        <button class="tab-button active" id="pronouns-tab-btn">Pronouns</button>
        <button class="tab-button" id="nouns-tab-btn">Nouns</button>
      </div>

      <div id="pronouns-tab" class="tab-content active">
        <div class="filter-section">
          <h3>Pronoun Types</h3>
          <div id="pronoun-type-container">
            <div class="filter-option">
              <input type="checkbox" id="personal" value="personal" checked>
              <label for="personal">Personal (я, ты, он...)</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="possessive" value="possessive">
              <label for="possessive">Possessive (мой, твой...)</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="demonstrative" value="demonstrative">
              <label for="demonstrative">Demonstrative (этот, тот)</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="interrogative" value="interrogative">
              <label for="interrogative">Interrogative (кто, что...)</label>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <h3>Cases</h3>
          <div id="pronoun-case-container">
            <div class="filter-option">
              <input type="checkbox" name="case" value="nominative" id="nom-p" checked>
              <label for="nom-p">Nominative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="case" value="accusative" id="acc-p">
              <label for="acc-p">Accusative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="case" value="genitive" id="gen-p">
              <label for="gen-p">Genitive</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="case" value="dative" id="dat-p">
              <label for="dat-p">Dative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="case" value="instrumental" id="inst-p">
              <label for="inst-p">Instrumental</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="case" value="prepositional" id="prep-p">
              <label for="prep-p">Prepositional</label>
            </div>
          </div>
        </div>
      </div>

      <div id="nouns-tab" class="tab-content">
        <div class="filter-section">
          <h3>Noun Types</h3>
          <div id="noun-type-container">
            <div class="filter-option">
              <input type="checkbox" id="masculine" value="masculine" checked>
              <label for="masculine">Masculine</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="feminine" value="feminine">
              <label for="feminine">Feminine</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="neuter" value="neuter">
              <label for="neuter">Neuter</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" id="plural" value="plural">
              <label for="plural">Plural</label>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <h3>Cases</h3>
          <div id="noun-case-container">
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="nominative" id="nom-n" checked>
              <label for="nom-n">Nominative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="accusative" id="acc-n">
              <label for="acc-n">Accusative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="genitive" id="gen-n">
              <label for="gen-n">Genitive</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="dative" id="dat-n">
              <label for="dat-n">Dative</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="instrumental" id="inst-n">
              <label for="inst-n">Instrumental</label>
            </div>
            <div class="filter-option">
              <input type="checkbox" name="noun-case" value="prepositional" id="prep-n">
              <label for="prep-n">Prepositional</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    To contact developer: <a href="mailto:LDRidgeway@gmail.com">LDRidgeway@gmail.com</a>
  </footer>

  <script>
    // Grammar data
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