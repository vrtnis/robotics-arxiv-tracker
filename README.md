## Robotics arXiv Tracker


<table style="width:100%">
  <tr>
    <td>
      <img src="imgs/readme/robotics_arxiv_tracker.png" alt="Robotics Arxiv Tracker" width="200px" />
    </td>
    <td>
      <img src="imgs/readme/readme_tracker_cover.png" alt="Readme cover" width="350px" />
    </td>
  </tr>
</table>

<p>A tool configured to help researchers efficiently track and review the latest academic papers in the field of robotics.</p>

<p>Check it out!</p>

<p><a href="https://vrtnis.github.io/robotics-arxiv-tracker/">https://vrtnis.github.io/robotics-arxiv-tracker/</a></p>

## **How It Works**

The Robotics arXiv Tracker fetches the latest academic papers in the field of robotics automatically.  It is based on template provided by [MyArxiv](https://github.com/MLNLP-World/MyArxiv). The process is automated using Github Actions, which ensures that the data is updated regularly without any manual intervention.


1. **Github Actions Workflow:**
    - A workflow file (`.github/workflows/update-feed.yml`) is set up in the repository.
    - This file contains instructions for Github Actions to follow.

2. **Daily Schedule:**
    - The workflow is scheduled to run once every day using a cron job.
    - At the specified time, Github Actions triggers the workflow to start.

3. **Fetching Data:**
    - The workflow runs a script that connects to the Arxiv API.
    - It fetches the latest academic papers directly from the specified categories (e.g., robotics, humanoid robotics, simulators like NVIDIA Isaac and MuJoCo).

4. **Updating the Repository:**
    - The fetched data is processed and stored in the repository.
    - This data is then used to update the static site hosted on Github Pages, ensuring that visitors see the latest papers.

### **Frequency of Updates**

The tracker is configured to fetch new data from the arXiv repository daily.


### Discord:

For the latest community-sourced robotics updates, consider joining the excellent [K-Scale Labs Discord](https://discord.gg/rhCy6UdBRD) server.