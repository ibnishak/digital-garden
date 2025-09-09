---
title: Assumptions of ANOVA
---

- Independence: the observations should be independent between groups and within each group.
- Normality
  - Normality assumption applies to the residuals.
    - Plot the standardized residuals to see if they are normal and centered around zero 
  -  If there is only few groups and each group has many values, check normality separately for each group.
  -  If you have many groups (a 2x2x3 ANOVA has 12 groups) or if there are few observations per group, check them all together.
  -  If you have a continuous covariate in the model as well, you CANNOT check per group. 
  - For small samples, normality check is a must.
  - For large samples (usually n≥30 in each group/sample), normality is not required (central limit theorem)
- Outliers: There should be no significant outliers in any group.
- Homoscedasticity


##  Homoscedasticity aka are variances are equal
- Bartlett test when your data are normally distributed and sample sizes are similar,
- Levene test when data are non-normally distributed or if outliers are suspected.
