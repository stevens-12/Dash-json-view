/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ClientCard = ({ client }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-4 cursor-pointer">
      <div>
        <h1 className="text-xl font-semibold">{client.name}</h1>
        <p className="text-sm text-gray-400">{client.title}</p>
      </div>
      <p className="text-xs text-gray-300">{client.date}</p>
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientCard;