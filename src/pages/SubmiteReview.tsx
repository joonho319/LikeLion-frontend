import React, { useEffect } from 'react';
import { useState } from 'react'
import {
  CalendarIcon,
  UsersIcon
} from '@heroicons/react/outline';
import { Link, useHistory } from 'react-router-dom';
import { CreateReview } from '../components/createReview';
import { Header2 } from '../components/header2';

export const SubmiteReview = () => {
  const history = useHistory();

  return (
    <>
      <Header2 page={'createReview'} />
      <CreateReview />
    </>
  )
}
