'use client'

// import { APP_NAME_RU, PAGES, NAV_LINKS } from '@/lib/constants'
import LocalHead from '@/components/ui/head-group'
import StarFrame from '@/components/fx/svg-frame'

export default function Cover(params:any) {
  //#region presets
  const preset1 = `\
    SSSSSwSSSSS\n
    SSSIThRPSSS\n
    SSSSTjRSSSS\n
    SOSQThRESOS\n
    SFFFSLSGGGS\n
    ayuyPwIuyud\n
    SRRRSOSTTTS\n
    SLSZGjFCSLS\n
    SSSSGhFSSSS\n
    SSSIGjFPSSS\n
    SSSSSxSSSSS`
  const preset2 = `\
    RHJTRHJTRHJT\n
    hrtjhrtjhrtj\n
    jfghjfghjfgh\n
    FJHGFJHGFJHG\n
    RHJTRHJTRHJT\n
    hrtjhrtjhrtj\n
    jfghjfghjfgh\n
    FJHGFJHGFJHG\n
    RHJTRHJTRHJT\n
    hrtjhrtjhrtj\n
    jfghjfghjfgh\n
    FJHGFJHGFJHG`
  const preset3 = `\
    RFRFRFRFRFRF
    TGTGTGTGTGTG
    RFRFRFRFRFRF
    TGTGTGTGTGTG
    RFRFRFRFRFRF
    TGTGTGTGTGTG
    RFRFRFRFRFRF
    TGTGTGTGTGTG
    RFRFRFRFRFRF
    TGTGTGTGTGTG
    RFRFRFRFRFRF
    TGTGTGTGTGTG`
  const preset4 = `\
    QWWWWWWWWWWE
    AVOOOOOOOOBD
    AIRTYURTYUPD
    AIUYFGUYFGPD
    AIYURTYURTPD
    AIFGUYFGUYPD
    AIRTYURTYUPD
    AIUYFGUYFGPD
    AIYURTYURTPD
    AIFGUYFGUYPD
    ABLLLLLLLLVD
    ZXXXXXXXXXXC`
  const preset5ext = `\
    SqwwwwwwwweS
    qQWWWWWWWWEe
    aAvvvvbbbbDd
    aAvvvvbbbbDd
    aAvvvvbbbbDd
    aAvvvvbbbbDd
    aAbbbbvvvvDd
    aAbbbbvvvvDd
    aAbbbbvvvvDd
    aAbbbbvvvvDd
    zZXXXXXXXXCc
    SzxxxxxxxxcS`
  const preset5min = `\
    QWWWWWWWWE
    AvvvvbbbbD
    AvvvvbbbbD
    AvvvvbbbbD
    AvvvvbbbbD
    AbbbbvvvvD
    AbbbbvvvvD
    AbbbbvvvvD
    AbbbbvvvvD
    ZXXXXXXXXC`
  const preset6 = `\
    qyuyuyuyuyuyuyuyuyuyuyue
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    jRTRTRTRTRTRTRTRTRTRTRTh
    hFGFGFGFGFGFGFGFGFGFGFGj
    zuyuyuyuyuyuyuyuyuyuyuyc`
  const preset7 = `\
    SqwwwwwwwweS
    qQWWWWWWWWEe
    aAvvvvbbbbDd
    aAbbbbvvvvDd
    aAvvvvbbbbDd
    aAbbbbvvvvDd
    aAvvvvbbbbDd
    aAbbbbvvvvDd
    aAvvvvbbbbDd
    aAbbbbvvvvDd
    zZXXXXXXXXCc
    SzxxxxxxxxcS`
  const divider = `\
    QFFYFPwIYFwGFwGFwGFwGUPwIGUGGE\n
    ZRRURPxIURxTRxTRxTRxTYPxITYTTC`
  //#endregion
  const pattern = preset5min

  return (
    <div className="pile m-auto md:aspect-square">
      <StarFrame />

      <div className="ornament self-center text-center">
        {pattern}
      </div>

      <LocalHead
        title='галерея живописи'
        subtitle='Познакомьтесь с разными гранями творчества талантливых художников-современников.'
        multiface={true}
      />
    </div>
  )
}
