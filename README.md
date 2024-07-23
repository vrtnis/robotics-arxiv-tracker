
<div style="display: flex; justify-content: center; align-items: center;">
    <div style="margin-right: 20px;">
        <img src="imgs/readme/robotics_arxiv_tracker.png" alt="Robotics Arxiv Tracker" width="200px" />
    </div>
    <div>
        <img src="imgs/readme/readme_tracker_cover.png" alt="Readme cover" width="500px" />
    </div>
</div>

<p>A tool configured to help researchers efficiently track and review the latest academic papers in the field of robotics.</p>

<p>Check it out!</p>

<p><a href="https://vrtnis.github.io/robotics-arxiv-tracker/">https://vrtnis.github.io/robotics-arxiv-tracker/</a></p>

## **How It Works**

The Robotics arXiv Tracker fetches the latest academic papers in the field of robotics automatically. The process is automated using Github Actions, which ensures that the data is updated regularly without any manual intervention.


1. **Github Actions Workflow:**
    - A workflow file (`.github/workflows/update-feed.yml`) is set up in the repository.
    - This file contains instructions for Github Actions to follow.

2. **Daily Schedule:**
    - The workflow is scheduled to run once every day using a cron job (`cron: "0 0 * * *"`).
    - At the specified time, Github Actions triggers the workflow to start.

3. **Fetching Data:**
    - The workflow runs a script that connects to the Arxiv API.
    - It fetches the latest academic papers directly from the specified categories (e.g., robotics, humanoid robotics, simulators like NVIDIA Isaac and MuJoCo).

4. **Updating the Repository:**
    - The fetched data is processed and stored in the repository.
    - This data is then used to update the static site hosted on Github Pages, ensuring that visitors see the latest papers.

### **Frequency of Updates**

The tracker is configured to fetch new data from the arXiv repository daily. This means that researchers can always access the most recent papers in their field of interest.


