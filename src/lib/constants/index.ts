import { Menu } from '@/lib/constants/texts'
import { Routes, HomePageSections } from '@/lib/constants/paths'

export const MenuFooterContent = [
  {label: Menu.HOME, path: Routes.HOME },
  {label: Menu.ABOUT, path: Routes.ABOUT },
  {label: Menu.OFFER, path: Routes.OFFER },
  {label: Menu.REALIZATIONS, path: Routes.REALIZATIONS },
  {label: Menu.CONTACT, path: Routes.CONTACT },
  {label: Menu.POLICY, path: Routes.POLICY },
]

export const MenuContent = [
  {label: Menu.HOME, path: HomePageSections.HOME },
  {label: Menu.ABOUT, path: HomePageSections.ABOUT },
  {label: Menu.OFFER, path: HomePageSections.OFFER },
  {label: Menu.REALIZATIONS, path: HomePageSections.REALIZATIONS },
  {label: Menu.CONTACT, path: HomePageSections.CONTACT },
]

export const Opinions = [
  {
    name: 'Jagoda Głodna',
    opinion: 'Dobra współpraca, odlew rzeźby wyszedł ładnie.',
    date: '01-01-2024',
    stars: 5
  },
  {
    name: 'Nihan Sezin',
    opinion: 'Pomysł z małymi rzeźbami jako pamiątek był świetny, a efekt końcowy przeszedł moje oczekiwania. Dzwonki cieszą oczy każdego dnia. Bardzo miły kontakt oraz super zrozumienie mojego zamysłu. Polecam.',
    date: '02-02-2024',
    stars: 5
  },
  {
    name: 'Kate Moss',
    opinion: 'The best of the best! I really like it!',
    date: '03-03-2024',
    stars: 5
  },
]

