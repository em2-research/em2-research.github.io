---
layout: post
title: IM3D
subtitle: An MPI-parallelized and full-3D Monte Carlo simulation code for ion radiation in matter
cover-img: /assets/img/6.jpg
date: 2022-02-09
---


Nanoscale ion implantation represents an expanding, interdisciplinary field that combines radiation effects with nanoengineering to control matter at the atomic level. In so doing it offers the potential to create novel nano-devices such as quantum computers, magnetometers, nanowire p–n junctions etc. In particular, ion implantation enables more precise control of the spatial distribution and concentration of dopants/vacancies, making it highly desirable for the reproducible fabrication of nano-devices. However, confidently taking advantage of it hinges upon the accurate knowledge of the spatial distribution of point defects (including dopants, vacancies, and self-interstitials) created by ion implantation, which is often predicted by Monte Carlo (MC) simulations.

As a result, we have developed [IM3D](http://li.mit.edu/im3d/): an open-source, MPI-parallelized and full-3D Monte Carlo simulation code for ion radiation in matter. Using [IM3D](http://li.mit.edu/im3d/), we have found that traditional 1D or semi-3D simulation codes such as SRIM could lead to significant errors in the [nano-beam and nano-target cases](http://li.mit.edu/Archive/Papers/18/Yang18LiNanoscale.pdf). We also explored [the influence of surface roughness on ion implantation and sputtering of materials](http://li.mit.edu/Archive/Papers/17/Li17YangNF.pdf).

![nanobeam](/assets/img/Yang18LiNanoscale-front.jpg)

## Publications:
\[8\] [Ion-beam radiation-induced Eshelby transformations: The mean and variance in hydrostatic and shear residual stresses](https://doi.org/10.1016/j.eml.2023.101970), Yongchao Chen, Qing-Jie Li, Alexander D. O’Brien, **Yang Yang**, Qi He, David A. Bloore, Joost J. Vlassak, Ju Li, _Extreme Mechanics Letters_, (2023), 59, 101970.

\[7\] [Effects of Recoil Spectra and Electronic Energy Dissipation on Defect Survival in 3C-SiC](https://www.sciencedirect.com/science/article/abs/pii/S2589152921000260), Lauren Nuckols, Miguel L. Crespillo, **Yang Yang**, Ju Li, Eva Zarkadoula, Yanwen Zhang and William J. Weber, _Materialia_, (2021) 101023.

\[6\] [Sample spinning to mitigate polarization artifact and interstitial-vacancy imbalance in ion-beam irradiation](https://www.nature.com/articles/s41524-020-00438-9#Sec12), Cui-Lan Ren, **Yang Yang**, Yong-Gang Li, Ping Huai, Zhi-Yuan Zhu & Ju Li, _npj Computational Materials, (2020) 189_

\[5\] [Focused-Helium-Ion-Beam Blow Forming of Nanostructures: Radiation Damage and Nanofabrication](https://iopscience.iop.org/article/10.1088/1361-6528/ab4a65), Chung-Soo Kim, Richard G Hobbs, Akshay Agarwal, **Yang Yang**, Vitor R Manfrinato, Michael P Short, Ju Li and Karl K Berggren, _Nanotechnology_, 31 (2020) 045302.

\[4\] [More Efficient and Accurate Simulations of Primary Radiation Damage in Materials with Nanosized Microstructural Features or Ion Beam](https://link.springer.com/referenceworkentry/10.1007/978-3-319-50257-1_115-1), Ju Li, **Yang Yang**, and Michael P. Short., _Handbook of Materials Modeling. Volume 2 Applications: Current and Emerging Materials_, (2018).

\[3\] [Nano-beam and nano-target effects in ion radiation](http://li.mit.edu/Archive/Papers/18/Yang18LiNanoscale.pdf), **Yang Yang**, Yong Gang Li, Michael P. Short, Chung-Soo Kim, Karl K. Berggren and Ju Li, _Nanoscale_ **10** (2018) 1598-1606.

\[2\] [Ion radiation albedo effect: influence of surface roughness on ion implantation and sputtering of materials](http://li.mit.edu/Archive/Papers/17/Li17YangNF.pdf), Yong Gang Li, **Yang Yang**, Michael P. Short, Ze Jun Ding, Zhi Zeng and Ju Li, _Nuclear Fusion_ **57** (2017) 016038.

\[1\] [IM3D: A parallel Monte Carlo code for efficient simulations of primary radiation displacements and damage in 3D geometry](http://li.mit.edu/Archive/Papers/15/Li15YangSR.pdf), Yong Gang Li, **Yang Yang**, Michael P. Short, Ze Jun Ding, Zhi Zeng and Ju Li, _Scientific Reports_ **5** (2015) 18130.
