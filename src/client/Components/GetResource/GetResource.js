import React from 'react';
import { useParams } from 'react-router-dom';

const GetResource = () => {
  const { resource, id } = useParams();
  console.log({ resource, id });
  return (
    <>
      {id}, {resource}
    </>
  );
};

export default GetResource;
