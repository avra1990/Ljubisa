function Promena() {
    this.radnici=[
        {ime:'Milos',prezime: 'Avramovic',datum_rodjenja: '14/06/1990',zanimanje:'informaticar'},
        {ime:'Petar',prezime: 'Petrovic', datum_rodjenja: '30/05/1990',zanimanje:'muzicar'},
        {ime:'Milos',prezime: 'Milojevic', datum_rodjenja:'03/09/1990',zanimanje:'privatnik'},
        {ime:'Janko',prezime: 'Raicevic',  datum_rodjenja:'03/03/1990',zanimanje:'radnik'},
    ];

    this.isprazniTabelu = function() {
        var redovi = document.getElementById('okvirTabele');
        if(redovi) {
            while(redovi.hasChildNodes()) {
                redovi.removeChild(redovi.firstChild());
            }
        }
        return;
        }

        this.prikaziTabelu= function() {
            this.isprazniTabelu();

            for(let indeks in this.radnici) {
                var red = document.createElement('tr');
                red.id = indeks;

                red.innerHTML = Mustache.render(document.getElementById('dodatakID').innerHTML,this.radnici[indeks]);

                var tabela = document.getElementById('okvirTabeleID');
                tabela.appendChild(red);
            }
            return;
        }
        
        this.dodajRadnika = function() {
            if(confirm('Dodajete novog radnika')){
                var ime            = prompt('Ime: ');
                var prezime        = prompt('Prezime: ');
                var datum_rodjenja = prompt('Datum rodjenja: ');
                var zanimanje      = prompt('Zanimanje: ');

                if((ime == ' ')
                   && (prezime ==' ')
                   && (datum_rodjenja ==' ')
                   && (zanimanje== ' ' )) {
                       alert('Niste uneli sve podatke');
                   } else {
                       this.radnici.push({ime:ime,prezime=prezime,datum_rodjenja=datum_rodjenja,zanimanje=zanimanje});
                   }
                   return;
            }
        };

        this.promeniDatum = function() {
            var datum_rodjenja = this.radnici[indeks].datum_rodjenja
            var datum_rodjenja = new Date(DD/MM/YYYY);
            document.getElementById('proDatID').innerHTML = datum_rodjenja;

            if(confirm('Zelite li da promenite datum rodjenja?')){
                this.radnici.onchange(indeks,1);
            }
        };
    };

    var novaPromena = new Promena();
    novaPromena.prikaziTabelu();

    var dugmeDodaj =document.getElementById('dodRadID');
    dugmeDodaj.onclick=function() {
        novaPromena.dodajRadnika();
    };

    var tabela = document.getElementById('okvirTabeleID');
        tabela.onclick = function(event) {
        console.log(event);

        if(event.target.type == 'button'){
            let redId=event.target.id;

            switch(target.type.id){

                case 'proDatID':
                novaPromena.promeniDatum(redId);
                break;
            }
        }

    };
