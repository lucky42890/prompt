import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import styles from '../src/styles/CountrySearch.module.scss';
import { list as countryData } from '../countries.json';

type Props = {
  countries: string[];
};

const CountrySearch = (props: Props) => {
  const { countries } = props;
  const [searchValue, setSearchValue] = useState('');
  const [countryList, setCountryList] = useState(countries);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCountryList(filterCountries(e.target.value));
  }

  const filterCountries = (searchKey: string): string[] => {
    return countries.filter(country => country.toLowerCase().startsWith(searchKey.toLowerCase()));
  }

  return (
    <div>
      <Head>
        <title>Country Search Page</title>
      </Head>

      <div className={styles.container}>
        <div className={styles['search-form-field']}>
          <p className={styles['field-label']}>Search Country:</p>
          <input type="text" value={searchValue} onChange={e => handleValueChange(e)} />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Country Name</th>
              </tr>
            </thead>
            <tbody>
              {
                countryList.map(country => {
                  return (
                    <tr key={country}>
                      <td>{country}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export function getStaticProps() {
  return {
    props: {
      countries: countryData
    }
  };
}

export default CountrySearch;