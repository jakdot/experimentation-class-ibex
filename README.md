# The folder for the lab meeting 20-02, class Experimentation

You will learn to work with Ibex and Ibex farm in this lab meeting.

To get you started, I prepared skeleton files for you and specified a few tasks, which, if you go through them, should help you understand how to use Ibex for your own experiments. This is not a graded assignment! Feel free to come up with other tasks and to try different features of Ibex.

1. Download/clone all the files from this repo
2. Go to http://spellout.net/ibexfarm/ and create an account.
3. Donwload the manual for Ibex: http://spellout.net/latest_ibex_manual.pdf. This will help you if you get stuck.
4. Create an experiment in Ibex farm and upload the following files *from the folder Preference task*:
- example\_intro.html into chunk\_includes (delete an old file in the folder, if there is any)
- judgements.js into data\_includes (delete an old file in the folder, if there is any)
5. Go through the experiment once; when you are done inspect results in *results*; these should be self-explanatory. After answering each of the following questions, you should always run the experiment and check the results to see that your modifications worked
6. Add extra items to the experiment.
7. Add extra fillers to the experiment.
8. Modify the html form, add a new column to collect information.
9. Add two more conditions per item (e.g., another quantifer).
10. Download the results in your R working directory and rename them as "results.csv". Then, run the script data\_munging.R in the same folder where you stored results.csv. You should be able to load your results into R. The R script specifies three tasks. Carry them out.
11. Create a second experiment and upload the following files *from the folder Acceptability*:
- example\_intro.html into chunk\_includes (delete an old file in the folder, if there is any)
- global\_stylesheet.css into css\_includes (not obligatory)
- acceptability.js into data\_includes (delete an old file in the folder, if there is any)
12. Go through the experiment once and inspect the results.
13. We now want to test that *each* has to satisfy the Differentiation condition (discussed in class 18-02), unlike *every*. Think of a way to test this in Acceptability task *that does not involve inverse quantifier scope*.
14. Write a few items following your idea. Create at least one full loop for the Latin square (you have to have as many items as conditions).
15. Add two fillers.
16. Run the experiment one more time, store the results and adapt data\_munging.R script that you used before. Using the script, load your acceptability data into R and calculate median Answer per condition.
