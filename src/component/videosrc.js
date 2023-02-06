const videosrc = {
  video_1:
    "https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTc4OTkwNH0.aOYpLnsEkGkbn7NmuCDTFNOBG34Fd-rfbX0f4gV6Y5mzOHU7nMMm11S9W1n1A3YiGD3_T_uqwnE1WNvt3XMliesPwh5RCVUnmJ8ZNlLszN0QXutxuv69ImpGq6Vbvn0mbuScHreHPbd0ob1QM6BDRcZ521Lqx1Lf1xByuIj32Dl_P4I0bekilKCnI9BsuJAtH9ntRzCdok3-5BUXnAQ4586cNvn_8b5f5b6QSzGm3M3GvHIjpJnvYZkx8BxRFdJKooGaY66AbzV8bKui3rnOhn9GKhHwCOqIqiMeHJo_-VCyX3X0WmvEiAskWaw-HMt0Nx8z1olQy1340BDB1zJ5iD3CDMepndI6DmGkV-E_79a9gaZAzau1x-2ZwAhM-OEP32eAAz2O5F_iksyNUM0ImNKqeZQwe03yTmrZfaaeBGSXEZ_cenGGi6TnKNnVkkKie-_-FjO4oa7nczW1DnSErlVZfAtkh6RNokpLy_rBBaKTMgS8gz9p7fUVgmj9f-jvDh8rahHc_Dhrbml5flXhZ6ucW5ZHVzQTzCb7ThPDspMouJjOkjY8SAi_-yHfT-d8R3F8bY68HqrKvL-RgddefqL_vmRp6588jMl_6C_doGT2v2zV5apOl0nUgCrxorZQlR9kiZaBMTjKcp_ClWTs6yTQ53H-8Nj1Xb1gqL41BOI",
  video_2:
    "https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY3NTc4OTkwNH0.A71m_kEUuU_v7PeHJJCD4XIAQapWdXyWfz6N5A_RBDNXrRtrtTZO-x_wAPfrQYINSOCyR3iHVgYvNgk1hqRzVBc7o4bx7sO_Nb1qwtskCMrUlPZXOM_CtZTjn2UArnli6f3o7gO0CpJGlerPXT6WTHt9Bq0vs4vZbbHh0T-C-3z7sIGK5c-O1YYfEFNl0aDIaY46xYZ5EsJB2X3e3JnQeMLUztHtyf3Ddjoh2KxzQNBgcW2sufzgzJe_0FtLlWr1Y_zQCzZ8KdAcbgJIgsCYQFHhmt5mJKK-TveKqwke1nIvWfh32vNRckCo6kWyNxIpd3DpNCAbHrH8w7-N1V8rO2nrwjP0sKA4PUTV6hqeNANtmgTbuilBtm66yTLVYLNWLCt4qbc0HW9Q0RvH3acNWF77M1DY5_SpttM0a5qL5nKa_qoB4kre5SoYEEPMC68MgOeWbAtxyl9MvLQ6psxb3u73fQF7UYcXNkrsxE5DCkEDMHLaib3ijOzwbPD78dZnoMjjhRb-8MI4vNt6joU-uyoGyRrXTWMDyNO6oXsmBrBRcX72dIjLL6YmPX_Zfl7FhFSorhn_YHMmNBZVzLC3KLYd8UT9bzbc4GcO9h43YZ9oy9CXeh6X8PTsf4kfFcoIEe8S9OsNckijCxcP_KwtKLTbZdook4fs6PULigtH3wk",
  video_3:
    "https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY3NTc4OTkwNH0.BmVNveEpCdgA4y41LOS2QJ-AbFUj0x2aN4vT3lm_SXURXALKYmzWH42Fp6Dvi0qDTOaWOk9DONPfjlQW6y-hA-G7d0qENVfC-9z2JIUMOx8KztH6q2RIMl8KI_fRizSFJEYUe-KeX3ETBZA5340dJUcWPCiFQj4gX0iGmM07-2lh8iCgpVq3Nq28eeYRQAvSc6N8Mx0_R1hUNZ2lJ7PsaQE9SnR9UHVbFz7OyF5bKZAjssfvuoAu8dGkK3dvqQlOaqYL0VWI92ykRSry--Y7AmmhTuqHCSYm_RrrtUuoRGb-xT3br0XkDKU1z_fIprHaUxJz1VyHXUHYOTDuewYvdR-X1QV2Dh3sosH0qO-ejBBrw45XEkKDLfKl7BlToXAKceBf_iTK_IXqxSiGK3aApR_-HgxkeR7fG-5z_fbFnD_SnrKJDN9iD_cpfGAr-qEaL4omwk5NURmT48QQg2N1MbfVwFZps6XaV9sJ3PvfKKBbJZQp3OSGrNpaQgAiHoA8E25_Jw9CFg5c1lFCSGO3C_zyC0LyNreNWcSxD1WpaqAa3FIMOqso6tW54Mcy4mvg3m2G6X90B8PYlhn46D0Lz4-heYQMuQipGP03DjMJI7K5D1_4UeJ6jLicKmINVu_oqriWWH2mpEpd4eVCS_3mQ_1N2C2sWhbXVaMx8G3uB-s",
};

export default videosrc;