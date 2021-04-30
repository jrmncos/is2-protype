import React from "react";
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Por hacer',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ],
      disallowAddingCard: true,
    },
    {
      id: 'lane2',
      title: 'En progreso',
      label: '0/0',
      cards: [],
      disallowAddingCard: false,
      currentPage: 1,
    },
    {
      id: 'lane3',
      title: 'Bloqueado',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane4',
      title: 'Hecho',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    }
  ]
}

export default function Kanban(){
  return (
    <Board data={data} editable/>
  )
}
