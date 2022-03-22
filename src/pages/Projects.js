import Fragment from 'react';
import classes from '../App.module.css';
import Header from '../UI/Header';

const Projects = () => {
  return (
    <div>
      <Header className={classes.header} />

      <h1 className={classes.projectHead}>Projects</h1>
      <hr />
      <br />
      <div className={classes.projectDiv}>
        <h2>Software Development</h2>
        <ul>
          <li>
            <section>
              <h3>DevFinder</h3>
              <p>
                Designed a backend CRUD API with NodeJS, Express,
                MongoDB. Functionalities include listing all
                developers and their skills in the
                database[pagination, filtering, selecting, limiting
                included], Search for developers by radius using zip
                code. Implemented user authentication.
              </p>
              <a href="https://github.com/nikhilkarve/devcamper">
                Code
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3>Sorting Simulation</h3>
              <p>
                Built a simulation of sorting algorithms using Vanilla
                JS. Functionalities include simulation of the working
                of the algorithm, being able to switch between
                different algorithms, changing the size of the array
                or generating a new one and previewing Java code for
                the chosen algorithm.
              </p>
              <a href="https://nikhilkarve.github.io/Sorting-Simulation-JS/">
                Live Demo
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3>PaperStox</h3>
              <p>
                A paper stock trading application. I worked on the
                buy/sell page of the application and the settings
                page. Application has features such as watchlist,
                history, details etc. Worked with firebase to handle
                user data.
              </p>
              <a href="https://github.com/PaperStox/paperstox-app-flutter">
                Code
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3>Bushop</h3>
              <p>
                Bushop is an android app that tracks the user's
                current location and helps the user to find nearby
                bus-stations within a 1km radius. The app also has an
                authentication & search feature which helps the user
                to search buses & their schedule via route number,
                source and destination.
              </p>
            </section>
            <a href="https://github.com/adityam31/bushop">Code</a>
          </li>
          <br />
        </ul>
        <h2>Data Science/Analytics</h2>
        <ul>
          <li>
            <section>
              <h3>Customer Data Analysis</h3>
              <p>
                Performed data analysis and customer segmentation by
                dividing a store's customers into groups. Performed
                RFM analysis and formed clusters based on the RFM
                scores of the customers. Also provided recommendations
                to perform targeted marketing campaigns based on the
                clusters formed.
              </p>
              <a href="https://github.com/nikhilkarve/Customer-Data-Analysis">
                Code & Report
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3>Quora Question Pair Similarity</h3>
              <p>
                The problem was to classify whether question pairs are
                duplicates or not. After text-preprocessing I built
                some features by analyzing the textual data and
                finding text similarities. I used a log-loss score as
                a metric to select the best model for the task.
              </p>
              <a href="https://github.com/nikhilkarve/Quora-Question-Similarity">
                Code
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3>Length of Stay Analysis.</h3>
              <p>
                I cleaned, transformed and analyzed healthcare data,
                created data quality reports. Identified and resolved
                data quality issues present in the data. Formulated a
                few questions to get insights into data. Found some
                insights by answering them using data manipulation
                techniques and visualizations.
              </p>
              <a href="https://github.com/nikhilkarve/lengthOfStay">
                Code
              </a>
            </section>
          </li>
          <br />
          <li>
            <section>
              <h3> DonorsChoose Prediction</h3>
              <p>
                I did this project to learn about text-processing,
                vectorization and different aspects of NLP as well as
                implementation of Naive Bayes. Problem here was to
                predict whether or not a DonorsChoose.org project
                proposal submitted by a teacher will be approved.
                After performing text preprocessing & vectorization, I
                used NB to perform classification and used AUC score
                to measure the performance of the model at different
                thresholds.
              </p>
            </section>
            <a href="https://github.com/nikhilkarve/DonorsChoosePrediction">
              Code
            </a>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Projects;
