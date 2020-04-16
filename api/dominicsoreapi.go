package main

import (
	"github.com/urfave/cli/v2"
	"log"
	"os"
	"time"
)

package main

import (
	"github.com/urfave/cli/v2"
	"log"
	"os"
	"time"
)

func main() {
	app := cli.App{
		Name:                   "Dominic Sore web server",
		Usage:                  "Serve dominicsore.com frontend",
		Version:                "1.0.0",
		Flags:                  []cli.Flag {
			&cli.IntFlag{
				Name:        "port",
				Aliases:	[]string{"p"},
				Usage:       "Listens on `PORT`",
				Value:       6592,
			},
			&cli.StringFlag{
				Name:        "logpath",
				Aliases:     []string{"l"},
				Usage:       "Logs to `PATH`",
				Value:       "/var/log/dominicsoreserver.log",
			},
		},
		Action: action,
		Compiled:               time.Time{},
		Authors: 				[]*cli.Author{{
			Name:  "Dominic Sore",
			Email: "dominic@dominicsore.com",
		}},
	}

	err := app.Run(os.Args)
	if err != nil {

	}
}

func action(context *cli.Context) error {
	logFile, logFileErr := os.OpenFile(context.String("logpath"), os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if logFileErr != nil {
		log.Fatal(logFileErr)
	}
	logger := log.New(logFile, "", log.LstdFlags)

	return nil
}