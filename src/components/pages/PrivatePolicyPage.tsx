import Title from "@/components/shared/Title"

export default function PrivatePolicyPage() {
  return (
    <div className="min-h-customScreen bg-background">
      <Title>Polityka prywatności</Title>

      <div className="max-w-4xl mx-auto p-5 shadow-lg rounded-lg text">
        <p className="text-gray-600 mb-4 text-justify">
          Witamy na stronie naszej odlewni artystycznej, specjalizującej się w
          wykonywaniu artystycznych odlewów z brązu na zamówienie. Szanujemy
          prywatność naszych klientów i dbamy o bezpieczeństwo ich danych
          osobowych. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób
          gromadzimy, wykorzystujemy i przechowujemy dane osobowe oraz jakie
          prawa mają nasi klienci w odniesieniu do swoich danych.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          1. Administrator danych
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          Administratorem danych osobowych jest{" "}
          <span className="font-medium">P.S. ODLEW Odlewnia Artystyczna</span>, z siedzibą w{" "}
          <span className="font-medium">Jawornik 505, Myślenice</span>, wpisana do
          Rejestru Przedsiębiorców pod numerem{" "}
          <span className="font-medium">[numer NIP lub KRS]</span>. W razie
          pytań dotyczących danych osobowych prosimy o kontakt pod adresem
          e-mail: <span className="font-medium">polewka.szymon@gmail.com</span>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          2. Jakie dane zbieramy
        </h2>
        <div className="text-gray-600 mb-4">
          Możemy zbierać następujące dane osobowe:
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>
              Adres zamieszkania lub dostawy (w przypadku realizacji zamówienia)
            </li>
            <li>Informacje o firmie (jeśli klientem jest przedsiębiorstwo)</li>
            <li>Dane płatnicze w celu realizacji płatności</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          3. Cel przetwarzania danych
        </h2>
        <div className="text-gray-600 mb-4">
          Dane osobowe zbieramy w następujących celach:
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>Przyjęcie i realizacja zamówień na odlewy artystyczne</li>
            <li>Kontakt z klientem w związku z realizacją zamówienia</li>
            <li>Przetwarzanie płatności za usługi</li>
            <li>
              Przesyłanie informacji marketingowych (jeśli wyraziłeś zgodę)
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          4. Podstawa prawna przetwarzania danych
        </h2>
        <div className="text-gray-600 mb-4">
          Przetwarzamy dane osobowe na podstawie art. 6 RODO, w szczególności w
          oparciu o:
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>
              niezbędność przetwarzania do wykonania umowy (realizacja
              zamówienia),
            </li>
            <li>zgodę na przetwarzanie danych w celach marketingowych,</li>
            <li>
              uzasadniony interes administratora (np. w celu obrony przed
              roszczeniami).
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          5. Udostępnianie danych
        </h2>
        <div className="text-gray-600 mb-4">
          Dane osobowe mogą być udostępniane wyłącznie:
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>
              Firmom obsługującym nasze płatności (np. operatorom płatności),
            </li>
            <li>
              Firmom kurierskim lub logistycznym, w celu dostarczenia
              zamówienia,
            </li>
            <li>
              Podmiotom świadczącym usługi prawne lub księgowe (jeśli jest to
              niezbędne).
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          6. Przechowywanie danych
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          Dane osobowe są przechowywane przez okres niezbędny do realizacji
          zamówienia oraz zgodnie z przepisami prawa. W przypadku danych
          przetwarzanych na podstawie zgody – do momentu jej cofnięcia.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          7. Prawa klientów
        </h2>
        <div className="text-gray-600 mb-4">
          Każdy klient ma prawo do:
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>Dostępu do swoich danych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Sprzeciwu wobec przetwarzania danych</li>
            <li>Cofnięcia zgody na przetwarzanie danych w dowolnym momencie</li>
          </ul>
          Aby skorzystać z powyższych praw, prosimy o kontakt pod adresem:{" "}
          <span className="font-medium">[adres e-mail]</span>.
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          8. Zmiany w Polityce Prywatności
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
          Prywatności. Wszelkie zmiany zostaną opublikowane na tej stronie, a
          klienci zostaną o nich poinformowani drogą mailową, jeśli zmiany będą
          miały wpływ na przetwarzanie ich danych.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          9. Kontakt
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          W razie pytań dotyczących Polityki Prywatności lub przetwarzania
          danych osobowych prosimy o kontakt pod adresem e-mail:{" "}
          <span className="font-medium">[adres e-mail]</span>.
        </p>
      </div>
    </div>
  )
}
