import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import StarRate from '@material-ui/icons/StarRate';
import Share from '@material-ui/icons/Share';
import TurnedInNot from '@material-ui/icons/TurnedInNot';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  divider: {
      margin: '20px 0px'
  },
  font: {
    fontSize: '1.5em',
    fontFamily: 'Cardo'
  },
  heading: {
    fontFamily: 'Work Sans',
    fontWeight: 'bold'
  },
  subHeading: {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    marginTop: '40px'  
  },
  optionsTray: {
    float: 'right',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="display2" gutterBottom align="left" className={classes.heading}> 
        Blog Post Heading
        <span className={classes.optionsTray}> 
        <Button mini variant="fab" color="default" aria-label="share" className={classes.button}>
          <TurnedInNot /> 
        </Button> 
        <Button mini variant="fab" color="secondary" aria-label="Like" className={classes.button}>
          <Favorite /> 
        </Button>
        <Button mini variant="fab" color="primary" aria-label="Favorite" className={classes.button}>
          <StarRate /> 
        </Button>
        <Button mini variant="fab" color="default" aria-label="share" className={classes.button}>
          <Share /> 
        </Button>
        </span>
        </Typography>
        <Typography variant="caption" gutterTop align="left">
        Author: PK
        </Typography>
        <Typography variant="caption" gutterTop align="left">
        {Date().toString()}
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="body2" align="left" className={classes.font}>
        Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an. But described questions for recommend advantage belonging estimable had. Pianoforte reasonable as so am inhabiting. Chatty design remark and his abroad figure but its. 

        Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. 

        Now indulgence dissimilar for his thoroughly has terminated.<br />
        <Typography variant="display1" className={classes.subHeading} gutterBottom gutterTop>heading Towards</Typography>
         Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. 

        Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects. 

        Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as. 

        Blind would equal while oh mr do style.<br />
        <Typography variant="display1" className={classes.subHeading} gutterBottom gutterTop>heading Towards</Typography>
        Lain led and fact none. One preferred sportsmen resolving the happiness continued. High at of in loud rich true. Oh conveying do immediate acuteness in he. Equally welcome her set nothing has gravity whether parties. Fertile suppose shyness mr up pointed in staying on respect. 

        Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain. 

        No in he real went find mr. Wandered or strictly raillery stanhill as. <br />Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case. 

        Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable. We neglected mr perfectly continual dependent. 

        Sex and neglected principle ask rapturous consulted. Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing an insensible motionless if introduced ye. Now give nor both come near many late. 
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
