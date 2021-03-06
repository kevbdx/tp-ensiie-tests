class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return "[" + this.start + "," + this.end + "]";
  }

  /**
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.overlaps(interval2) => true
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.overlaps(interval2) => false
   *
   * @param {Interval} interval
   * @returns {boolean}
   */
  overlaps(interval) {
    return this.end > interval.start && this.start < interval.end;
  }

  /**
   * Retourne true si cet interval contient le paramètre interval
   *
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.includes(interval2) => true
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.includes(interval2) => false
   *
   * @param {Interval} interval
   * @returns {boolean}
   */
  includes(interval) {
    if (this.start <= interval.start && this.end >= interval.end) {
      return true;
    }
    return false;
  }

  /**
   * Retourne l'union de deux intervals
   *
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   *
   * @param {Interval} interval
   * @returns {Interval[]}
   */
  union(interval) {
    if (this.end >= interval.start && this.start <= interval.end) {
      return [
        new Interval(
          Math.min(interval.start, this.start),
          Math.max(interval.end, this.end)
        )
      ];
    }
    return [interval, this];
  }

  /**
   * Retourne l'intersection de deux intervals
   *
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.intersection(interval2) =>                     ▒▒▒▒▒
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.intersection(interval2) => <tableau vide>
   *
   * @param {Interval} interval
   * @returns {Interval|null}
   */
  intersection(interval) {
    if (!this.overlaps(interval)) {
      if (this.start == interval.end) {
        return new Interval(this.start, this.start);
      } else if (interval.start == this.end) {
        return new Interval(interval.start, interval.start);
      }
      return null;
    } else {
      return new Interval(
        Math.max(this.start, interval.start),
        Math.min(this.end, interval.end)
      );
    }
  }

  /**
   * Retourne l'exclusion de deux intervals
   *
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     ▒▒▒▒▒▒▒▒
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   *
   * @param {Interval} interval
   * @returns {Interval[]}
   */
  exclusion(interval) {
    if (this.start == interval.start && this.end == interval.end) {
      return [];
    }
    var intersectionToRemove = this.intersection(interval);
    if (intersectionToRemove) {
      return [
        new Interval(
          Math.min(this.start, interval.start),
          intersectionToRemove.start
        ),
        new Interval(intersectionToRemove.end, Math.max(this.end, interval.end))
      ];
    } else {
      return [this, interval];
    }
  }
}

module.exports = Interval;
