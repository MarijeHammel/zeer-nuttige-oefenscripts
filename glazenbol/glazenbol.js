// readline spul

const readline = require('readline');
  
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

// arrays

  const toekomst = [
      `De uitkomst van de loterij blijft onbekend tot de uitslag.`,
      `Helaas, je raakt je sleutels kwijt.`,
      `In de nabije toekomst vind je een appel.`,
      `Als je links kijkt, zie je rechts niets.`,
      `Waar is het feestje? Je weet het niet, want je bent niet uitgenodigd.`,
      `Wanneer je een boom ziet, heeft deze waarschijnlijk takken.`,
      `Ik voorspel dat je vandaag een kleur zal zien, tenzij je (kleuren)blind bent.`,
      `Je zal een onbekende man tegenkomen in de supermarkt.`,
      `Vandaag ga je waarschijnlijk een keer naar het toilet.`,
      `Ik voorspel hoofdpijn. Vergeet niet om water te drinken.`,
      `Ik weet dat je wel eens vergeet je tanden te poetsen.`,
      `Controleer even of je de deur wel op slot hebt gedaan!`,
      `Heb je al in dat ene keukenlaatje gekeken?`,
      `Vraag het morgen nog eens, dan heb je meer geluk.`,
      `Je eet waarschijnlijk vanavond geen pizza, maar als je dat wel doet - eet smakelijk!.`,
      `Is het koud buiten? Trek dan een jas aan voor je vertrekt.`
  ]

  const pos = [
      `Wat goed om te horen! `,
      `Heel fijn! `,
      `Houd dat vol! `,
      `Heel prettig! `,
      `Wat leuk! `,
      `Nee écht? `,
      `Nou, wat goed! `,
      `Geniet van je goede bui! `,
      `Heerlijk toch! `,
      `Heel prettig om dat te horen. `
  ]

  const neg = [
      `Ach gossie, nee! `,
      `Gut, oh gut. `,
      `Wat vervelend! `,
      `Ik ben er voor je! `,
      `Vergeet niet om hulp te vragen! `,
      `Heb je een knuffel nodig? `,
      `Na regen komt zonneschijn. `,
      `Gut, wat vervelend. `,
      `Hè, nee! `,
      `Nou, dat is jammer. `
  ]

  const neut = [
      `Nou, oké! `,
      `Hoe is het weer vandaag? `,
      `Je zal vast nog ademen. `
  ]
// rando arrays

  const randtoekomst = toekomst[Math.floor(Math.random() * toekomst.length)] // rando fortune
  const randpos = pos [Math.floor(Math.random() * pos.length)] // rando 'het gaat goed'
  const randneg = neg [Math.floor(Math.random() * neg.length)] // rando 'het gaat slecht
  const randneut = neut [Math.floor(Math.random() * neut.length)] // rando undef

 

// het epische script

  r1.question(`>>Hoe gaat het?\n`, (zoho) =>{
      // leestekens weg en kleine letters
    const zo = zoho.toLowerCase().replace(/[^\w\s]/, "")
      // pos
      if(zo == "goed") { 
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("prima")) {
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("lekker")) {
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("super")) {
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("fantastisch")) {
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("zonnig")) {
        console.log(`>> ${randpos}Gezien het ${zo} gaat, heb je deze voorspelling niet echt nodig:\n\n${randtoekomst}\n`)
      }


      // neg
      else if (zo.includes("slecht")) {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("kut")) {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      else if (zo == "niet goed") {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("bagger")) {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("naar")) {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      else if (zo.includes("minder")) {
        console.log(`>> ${randneg}Gezien het ${zo} gaat, kan je deze voorspelling goed gebruiken:\n\n${randtoekomst}\n`)
      }
      
      
      // neut
      else {
        console.log(`>> ${randneut}Gezien het ${zo} gaat, heb ik hier een gratis voorspelling.\n\n${randtoekomst}\n`)
      }
      r1.close();
})

// de eint
