#We create readable column names
y <- paste("V", 1:11, sep="")
y
    
data1 <- read.csv("results.csv", sep=",", header=FALSE, fill=TRUE, col.names=y, colClasses="character", blank.lines.skip=TRUE, comment.char="#", strip.white=TRUE)

data1

str(data1)
data1

# Calculate mean reaction time for all exp items
# Calculate mean reaction time for all controls
# Summarise for the exp. items with each:
# - how often the response with "possibly different" (inverse scope) was chosen
# - how often the response with "the same" (surface scope) was chosen
# Hint: use the function grepl to solve these questions
