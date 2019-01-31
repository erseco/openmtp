import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import TabIcon from '@material-ui/icons/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styles } from '../styles/WhatsNew';
import KeyboadShortcuts from './KeyboadShortcuts';
import { APP_NAME, APP_VERSION } from '../../../constants/meta';

class WhatsNew extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expansionPanel: {
        keyboardNavigation: false
      }
    };
  }

  _handleExpansionPanel = ({ key }) => {
    this.setState(prevState => {
      return {
        expansionPanel: {
          ...prevState.expansionPanel,
          [key]: !prevState.expansionPanel[key]
        }
      };
    });
  };

  render() {
    const { classes: styles } = this.props;
    const { expansionPanel } = this.state;

    return (
      <div className={styles.root}>
        <Typography variant="body1" className={styles.title}>
          What&apos;s new in {APP_NAME}-{APP_VERSION}?
        </Typography>
        <List>
          <ListItem
            button
            onClick={() =>
              this._handleExpansionPanel({
                key: 'keyboardNavigation'
              })
            }
          >
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Keyboard Navigation"
              secondary="Click here to view the Keyboard Shortcuts"
            />
            {expansionPanel.keyboardNavigation ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItem>
          <Collapse
            in={expansionPanel.keyboardNavigation}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem>
                <div className={styles.nestedPanel}>
                  <KeyboadShortcuts />
                </div>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <ListItemIcon>
              <TabIcon />
            </ListItemIcon>
            <ListItemText primary="New Tab Layout" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SystemUpdateIcon />
            </ListItemIcon>
            <ListItemText primary="New Software Update Manager" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InsertChartIcon />
            </ListItemIcon>
            <ListItemText primary="New Onboarding UI" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="New Settings UI" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(WhatsNew);