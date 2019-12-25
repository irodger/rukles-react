import React from 'react';
import FantasticIcon from 'assets/images/filters/fantasticIcon';
import FantasyIcon from 'assets/images/filters/fantasyIcon';
import HorrorIcon from 'assets/images/filters/horrorIcon';
import RealismIcon from 'assets/images/filters/realismIcon';
import StartIcon from 'assets/images/filters/startIcon';
import StarWarsIcon from 'assets/images/filters/starWarsIcon';
import AllIcon from 'assets/images/filters/mixerIcon';

const filters = [
  {
    alias: 'start',
    title: 'Novichok',
    description: 'Начальная тема предпочтительна для большинства новичков',
    caption: 'Начальный',
    icon: <StartIcon />,
  }, {
    alias: 'fantasy',
    title: 'Фэнтэзи',
    description: 'Фэнтезийная тема для поклонников Толкиена и чуть-чуть варкрафта',
    caption: 'Фэнтэзи',
    icon: <FantasyIcon />,
  }, {
    alias: 'realism',
    title: 'Реализм',
    description: 'Уныло, сурово, жизененно. Без мохнатых бабочек и роботов-тюленей, а жаль.',
    caption: 'Реализм',
    icon: <RealismIcon />,
  }, {
    alias: 'fantastic',
    title: 'Фантастика',
    description: 'Фантастика моего детства, роботы, суперкомпььютеры и немного супергероики',
    caption: 'Фантастика',
    icon: <FantasticIcon />,
  }, {
    alias: 'horror',
    title: 'Ужастики',
    description: 'Ужасная тема, монстры, животные со странными профессииями и зомби',
    caption: 'Ужастики',
    icon: <HorrorIcon />,
  }, {
    alias: 'starwars',
    title: 'Star Wars',
    description: 'Звездные Войны для особых ценителей, десятки непонятных существ и р2д2',
    caption: 'Star Wars',
    icon: <StarWarsIcon />,
  }, {
    alias: 'all',
    title: 'Все варианты',
    description: 'Сборная солянка, все подряд. Да, тут самый полный набор',
    caption: 'Все',
    icon: <AllIcon />,
  },
];

export default filters;
