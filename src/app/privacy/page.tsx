"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-stone-50">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative w-full py-16 sm:py-20 bg-stone-900 flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest font-outfit">
              Legal &amp; Regolamenti
            </span>
            <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
              Privacy Policy &amp; Cookie
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Informativa sul trattamento dei dati personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR - UE 2016/679).
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16 max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/60 shadow-xl space-y-8 text-stone-700 text-sm sm:text-base leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="font-outfit text-xl sm:text-2xl font-bold text-stone-950">Informativa sulla Privacy</h2>
              <p>
                L’ASPU rispetta la privacy dei propri utenti e si impegna a proteggere i loro dati personali.
              </p>
              <p>
                In generale, l'utente può navigare sul sito web dell’ASPU senza fornire alcun tipo di informazione personale. La raccolta ed il trattamento di dati personali avvengono quando necessari in relazione all'esecuzione di servizi richiesti dall'utente, o quando l'utente stesso decide di comunicare i propri dati personali; in tali circostanze, il presente regolamento della privacy illustra le modalità ed i caratteri di raccolta e trattamento dei dati personali dell'utente. L’ASPU tratta i dati personali forniti dagli utenti in conformità alla normativa vigente.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Raccolta di Dati Personali</h3>
              <p>
                Dato personale significa qualsiasi informazione che possa essere impiegata per identificare un individuo, una società od altro ente. A titolo puramente esemplificativo e non esaustivo viene raccolto ad esempio il nome ed il cognome, l'indirizzo di posta elettronica (e-mail), l'indirizzo, un recapito postale od altro recapito di carattere fisico, altre informazioni necessarie per contattare l'utente, qualifica, data di nascita, genere, lavoro, attività commerciale, interessi personali, altre informazioni necessarie per la prestazione di servizi richiesti dall'utente.
              </p>
              <p>
                La navigazione sul sito dell’ASPU avviene in forma anonima, a meno che l'utente abbia precedentemente specificato che desidera che l’ASPU ricordi l'identificativo con cui si è registrato e la relativa password. L’ASPU non compie operazioni di raccolta dati dell'utente con modalità automatiche, incluso l'indirizzo di posta elettronica (e-mail).
              </p>
              <p>
                L'ASPU registra l'indirizzo IP dell'utente (Internet Protocol, vale a dire l'indirizzo Internet del computer dell'utente) per avere un'idea dell'area del sito che l'utente visita e della durata della visita, nel rispetto della normativa vigente in tema di tutela di dati personali. Tuttavia l’ASPU non mette in relazione l'indirizzo IP dell'utente con altre informazioni personali relative allo stesso, se non dopo averlo debitamente informato del relativo trattamento ed avere ottenuto il suo consenso al trattamento, e solo rispetto ad utenti registrati al sito dell’ASPU.
              </p>
              <p>
                Come molti altri siti web aventi carattere e contenuto indirizzato ai servizi, il sito dell’ASPU può impiegare una tecnologia standard chiamata &ldquo;cookie&rdquo; per raccogliere informazioni sulle modalità di uso del sito da parte dell'utente. Per ulteriori informazioni, l'utente è invitato a consultare la seguente sezione &ldquo;Cookies&rdquo;.
              </p>
              <p>
                L’ASPU raccoglie i dati personali dell'utente in occasione della sua registrazione, per emettere un account, necessario all’utente per usufruire di determinati prodotti o servizi.
              </p>
              <p>
                In particolare la registrazione è necessaria all'utente per partecipare al forum, per usufruire della chat, per poter inviare messaggi ad altri iscritti, per inserire commenti alle notizie, quando l'utente chiede di ricevere determinate e-mails o di essere inserito in una mailing list, o quando l'utente, per qualsiasi altra ragione, comunica i propri dati personali. L’ASPU usa tali informazioni solamente ove le stesse siano state legittimamente raccolte, in conformità al presente Regolamento della Privacy e nel rispetto della normativa vigente.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Comunicazione di Dati Personali</h3>
              <p>
                In caso di raccolta di dati personali, l’ASPU informerà l'utente delle finalità della raccolta al momento della stessa e, ove necessario, richiederà il consenso dell'utente. L’ASPU non comunicherà i dati personali dell'utente a terzi senza il consenso dell'utente, salvo le limitate circostanze specificate in seguito nella Sezione &ldquo;Ambito di Comunicazione e Diffusione di Dati Personali&rdquo;.
              </p>
              <p>
                Se l'utente decide di fornire all’ASPU i propri dati personali, l’ASPU potrà comunicarli all'interno dell'Associazione o a terzi che prestano servizi ad essa collegati, che hanno bisogno di conoscerli in ragione delle proprie mansioni, e, ove necessario, con il permesso dell'utente. L’ASPU invierà all'utente materiale relativo ad attività di informazione ed a ricerche di mercato solo dopo aver informato l'utente ed aver ottenuto il consenso dello stesso al trattamento, in conformità alle disposizioni vigenti in tema di protezione di dati personali.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Cookies</h3>
              <p>
                Un cookie è un piccolo file di testo che alcuni siti web inviano all'hard drive dell'utente in occasione della visita al sito. Un cookie può contenere informazioni quali un ID dell'utente che il sito usa per controllare le pagine visitate, ma le uniche informazioni di carattere personale che un cookie può contenere sono quelle fornite dall'utente stesso. Un cookie non può leggere i dati presenti sull'hard disk dell'utente o leggere i cookies creati da altri siti. Alcune aree del sito web dell’ASPU impiegano cookies per registrare le modalità di navigazione degli utenti sul sito. L’ASPU si serve di cookies per determinare il grado di utilità delle informazioni che fornisce ai propri utenti e per verificare l'efficacia della struttura di navigazione del sito, in relazione al supporto aiuto offerto all'utente per ottenere quell'informazione.
              </p>
              <p>
                Se l'utente non desidera ricevere cookies durante la navigazione sul sito, può programmare il proprio browser in modo da essere avvertito prima di accettare cookies e rifiutare i cookies quando il browser avvisa della presenza di cookies. L'utente può anche rifiutare tutti i cookies, disattivandoli nel proprio browser, anche se in tal modo l'utente non sarebbe poi in grado di beneficiare in pieno dei vantaggi del sito dell’ASPU. In particolare, all'utente potrebbe essere chiesto di accettare cookies al fine di compiere determinate operazioni sul sito web dell’ASPU. Tuttavia non è necessario che l'utente accetti tutti i cookies per usare /navigare in molte aree del sito, salvo il caso in cui per l'accesso a specifiche pagine web dell’ASPU siano necessari la registrazione ed una password.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Finalità e Modalità di Trattamento dei Dati Raccolti</h3>
              <p>
                L’ASPU tratta i dati personali dell'utente per le seguenti finalità di carattere generale: per soddisfare le richieste relative a specifici prodotti o servizi, per personalizzare la visita dell'utente al sito, per aggiornare l'utente sulle ultime novità in relazione ai propri servizi, od altre informazioni che l’Associazione ritiene siano di interesse dell'utente, e che provengono dall’ASPU o dai suoi partners, e per comprendere meglio i bisogni dell'utente ed offrire allo stesso servizi migliori. Il trattamento di dati personali dell'utente da parte dell’ASPU per le finalità sopra specificate avviene in conformità alla normativa vigente a tutela di dati personali.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Ambito di Comunicazione e Diffusione di Dati Personali</h3>
              <p>
                I dati personali dell'utente non vengono comunicati al di fuori della realtà dell’ASPU senza il consenso dell'interessato, salvo quanto di seguito specificato.
              </p>
              <p>
                Nell'ambito dell'organizzazione dell’ASPU, i dati sono conservati in servers controllati cui è consentito un acesso limitato in conformità alla normativa vigente a tutela di dati personali.
              </p>
              <p>
                L’ASPU può comunicare i dati personali dell'utente a terzi in uno dei seguenti casi: quando l'interessato abbia prestato il proprio consenso alla comunicazione; quando la comunicazione sia necessaria per fornire il prodotto od il servizio richiesto dall'utente; quando la comunicazione sia necessaria in relazione a terzi che lavorano per conto dell’Associazione per fornire il prodotto od il servizio richiesto (l’ASPU comunicherà a questi solo le informazioni che si rendono necessarie in relazione alla prestazione del servizio, ed alle stesse è vietato trattare i dati per finalità diverse); o per fornire all'utente le informazioni che l’ASPU ritenga sia interessato a conoscere dall’Associazione stessa e dagli altri enti ad esso collegati (in qualsiasi momento l'utente potrà richiedere di non ricevere più tale tipo di informazioni). L’ASPU inoltre divulgherà i dati personali dell'utente in caso ciò sia richiesto dalla legge.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Diritti dell'Utente e Sicurezza</h3>
              <p>
                Se l'utente è registrato, può avere accesso ai propri dati personali o richiederne la modifica o la cancellazione contattando direttamente la segreteria. L'utente può chiedere la cancellazione dalla newsletter, può limitare la diffusione del proprio profilo o chiedere la cancellazione del proprio account inviando un'e-mail al seguente indirizzo: <strong>info@aspu.it</strong>.
              </p>
              <p>
                Le informazioni dell’account dell'utente sono protette per garantire la riservatezza e la sicurezza dell'utente. L’ASPU adotta tutte le misure di sicurezza e le procedure fisiche, elettroniche, ed organizzative richieste dalla normativa vigente. In alcune aree del proprio sito web, l’ASPU impiega sistemi standard SSL di criptazione per aumentare la sicurezza della trasmissione di dati. Anche se fa quanto ragionevolmente possibile per proteggere i dati personali dell'utente, l’ASPU non può garantire la completa totale sicurezza dei dati trasmessi dagli utenti durante la comunicazione, quindi l’ASPU raccomanda caldamente all'utente di adottare misure precauzionali per proteggere i propri dati personali quando naviga su Internet.
              </p>
            </div>

            <hr className="border-stone-150" />

            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-stone-950">Minori e Siti Terzi</h3>
              <p>
                Il sito web dell’ASPU presenta contenuti puramente didattici e culturali e non richiede, in fase di iscrizione, la maggiore età dell’utente.
              </p>
              <p>
                Il sito web contiene link ad altri siti. L’ASPU non condivide i dati personali dell'utente con questi siti e non è responsabile delle pratiche degli stessi in relazione alla tutela ed al trattamento di dati personali. Si invita l'utente a prendere visione delle politiche della privacy di tali siti esterni.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
