export type OpinionManipulationType = {
  _id: string
  name: string
  label: string
  icon: React.ReactNode
  onClick: (id: string) => void
}