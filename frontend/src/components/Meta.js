import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Rent the Place',
  description: 'Your meetings at your desired workspace',
  keywords: 'hotel, workspace, workspace rental, rental platform, office rental, rental office, workspace rent',
}

export default Meta
