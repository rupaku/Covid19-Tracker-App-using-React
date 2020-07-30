import React from "react"
// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"

import styles from "./App.module.css"

import { Cards, Chart, CountryPicker } from "./components"
import { fetchData } from "./api"
import coronaImage from "./images/image.png"

class App extends React.Component {
  state = {
    data: {},
    country: "",
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
    console.log(fetchedData)
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
  }
  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} className={styles.card} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
