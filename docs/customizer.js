class Customizer {
  constructor() {
    this.sass = new Sass();
    this.options = {
      darkMode: false,
      googleFont: 'Lato',
      'border-radius': 4
    };
    this.idleScss = '';
    this.compiled = '';
    this.ready = false;

    this.style = document.createElement('style');
    document.head.appendChild(this.style);

    const files = [
      'colours',
      'components',
      'general',
      'helpers',
      'input',
      'table',
      'text'
    ];

    // Download SCSS from GitHub
    const promises = files.map(file => (new Promise((resolve,reject) => {
      axios.get(`https://raw.githubusercontent.com/jf908/idle-css/master/scss/${file}.scss`)
        .then(res => {
          const data = res.data;
          this.sass.writeFile(`scss/${file}.scss`, data, function() {
            resolve();
          });
        })
        .catch(err => {
          reject(err);
        });
    })));
    
    Promise.all(promises).then(() => {
      this.ready = true;
      this.sass.compile(this.idleScss, (res) => {
        this.compiled = res.text;
        this.style.textContent = res.text;
      });
    }).catch(err => {
      console.log(err);
    });

    this.updateScss();
  }

  updateScss() {
    this.idleScss = '';
    Object.keys(this.options).forEach(option => {
      if(typeof this.options[option] === 'string') {
        this.idleScss += `$${option}: "${this.options[option]}";`;
      } else if(typeof this.options[option] === 'number') {
        this.idleScss += `$${option}: ${this.options[option]}px;`;
      } else {
        this.idleScss += `$${option}: ${this.options[option]};`;
      }
    });
    this.idleScss += `
      @import "scss/general";
      @import "scss/helpers";
      @import "scss/text";
      @import "scss/input";
      @import "scss/table";
      @import "scss/components";
      @import "scss/colours";`

    if(!this.ready) return;
    this.sass.compile(this.idleScss, (res) => {
      this.compiled = res.text;
      this.style.textContent = res.text;
    });
  }
}

const customizer = new Customizer();

document.getElementById('download').addEventListener('click', () => {
  if(customizer.compiled === '') return;

  const a = document.createElement('a');
  const file = new Blob([customizer.compiled], {type: 'plain/text'});
  a.href = URL.createObjectURL(file);
  a.download = 'idle-custom.css';
  a.click();
});

function setScss(varName, val) {
  customizer.options[varName] = val;
  customizer.updateScss();
}